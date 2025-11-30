import { Project, BlogPost, Order, OrderStatus } from '../types';
import { translations } from './i18n';

// 💡 Definición global para SQL.js cargado vía CDN
declare global {
  interface Window {
    initSqlJs: (config: any) => Promise<any>;
  }
}

/**
 * 🏛️ SQLiteService: El "Backend" en el Frontend.
 * 
 * Arquitectura: Singleton Pattern.
 * Garantiza que solo exista una instancia de la conexión a la base de datos WASM.
 * Maneja la persistencia manual hacia localStorage para simular un servidor real.
 */
class SQLiteService {
  private db: any = null;
  private isInitialized = false;

  constructor() {}

  /**
   * 🚀 Inicializa el motor SQL WASM y recupera/crea la base de datos.
   */
  async init() {
    if (this.isInitialized) return;

    try {
      const SQL = await window.initSqlJs({
        locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
      });

      // 💾 Estrategia de Persistencia:
      // Intentamos hidratar la DB desde localStorage (Uint8Array binario).
      const savedDb = localStorage.getItem('portfolio_db');
      
      if (savedDb) {
        const uInt8Array = new Uint8Array(JSON.parse(savedDb));
        this.db = new SQL.Database(uInt8Array);
      } else {
        // 🌱 Si es primera vez, creamos una DB limpia en memoria RAM.
        this.db = new SQL.Database();
        this.createTables();
        this.seedData();
      }

      this.isInitialized = true;
      console.log("💾 SQLite WebAssembly initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize SQLite database:", error);
    }
  }

  /**
   * 🏗️ Define el esquema de la base de datos (DDL).
   */
  private createTables() {
    const sql = `
      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );

      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        roles TEXT,
        technologies TEXT,
        buyUrl TEXT,
        price REAL
      );

      CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        excerpt TEXT,
        date TEXT,
        category TEXT,
        readTime TEXT,
        url TEXT
      );

      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customerName TEXT,
        customerEmail TEXT,
        totalAmount REAL,
        status TEXT,
        paymentMethod TEXT,
        paymentReference TEXT,
        items TEXT,
        date TEXT
      );
    `;
    this.db.run(sql);
    this.save();
  }

  /**
   * 🌱 Puebla la base de datos con datos iniciales (Seeding) si está vacía.
   */
  private seedData() {
    // Verificamos si ya existen administradores
    const res = this.db.exec("SELECT count(*) as count FROM admins");
    if (res[0].values[0][0] > 0) return;

    console.log("🌱 Seeding database with initial data...");

    // 1. Admin Default
    this.db.run("INSERT INTO admins (username, password) VALUES (?, ?)", ['04124828842', '1234']);

    // 2. Proyectos (desde archivo estático i18n para bootstrap)
    const initialProjects = translations['en'].projects_data;
    const stmtProj = this.db.prepare("INSERT INTO projects (title, description, roles, technologies, buyUrl, price) VALUES (?, ?, ?, ?, ?, ?)");
    
    initialProjects.forEach((p: any) => {
      stmtProj.run([
        p.title,
        p.description,
        JSON.stringify(p.roles),
        JSON.stringify(p.technologies),
        p.buyUrl || '',
        p.price || 0
      ]);
    });
    stmtProj.free();

    // 3. Blog Posts
    const initialPosts = translations['en'].blog_posts;
    const stmtBlog = this.db.prepare("INSERT INTO blog_posts (title, excerpt, date, category, readTime, url) VALUES (?, ?, ?, ?, ?, ?)");
    
    initialPosts.forEach((p: any) => {
      stmtBlog.run([p.title, p.excerpt, p.date, p.category, p.readTime, p.url]);
    });
    stmtBlog.free();
    
    this.save();
  }

  /**
   * 💾 Persiste el estado actual de la memoria RAM a localStorage.
   * Dispara un evento global para sincronizar UI.
   */
  private save() {
    if (!this.db) return;
    const data = this.db.export();
    const array = Array.from(data);
    localStorage.setItem('portfolio_db', JSON.stringify(array));
    
    // 📢 Patrón Observer: Notificamos a los componentes React que hubo cambios.
    window.dispatchEvent(new Event('portfolio-db-change'));
  }

  // ===========================================================================
  // 🔐 AUTHENTICATION
  // ===========================================================================

  async login(username: string, password: string): Promise<boolean> {
    if (!this.db) await this.init();
    
    // ⚠️ Nota educativa: En un backend real, nunca guardaríamos contraseñas en texto plano.
    // Usaríamos hashing (bcrypt/argon2). Aquí es didáctico.
    const stmt = this.db.prepare("SELECT * FROM admins WHERE username = ? AND password = ?");
    stmt.bind([username, password]);
    
    const isValid = stmt.step();
    stmt.free();
    return isValid;
  }

  // ===========================================================================
  // 📂 PROJECTS CRUD
  // ===========================================================================

  async getProjects(): Promise<Project[]> {
    if (!this.db) await this.init();

    const res = this.db.exec("SELECT * FROM projects");
    if (res.length === 0) return [];

    return this.mapResults<Project>(res[0], (col, val) => {
      if (col === 'roles' || col === 'technologies') {
        try { return JSON.parse(val); } catch (e) { return []; }
      }
      return val;
    });
  }

  async addProject(project: Project): Promise<void> {
    if (!this.db) await this.init();
    this.db.run(
      "INSERT INTO projects (title, description, roles, technologies, buyUrl, price) VALUES (?, ?, ?, ?, ?, ?)",
      [project.title, project.description, JSON.stringify(project.roles), JSON.stringify(project.technologies), project.buyUrl || '', project.price || 0]
    );
    this.save();
  }

  async deleteProject(id: number): Promise<void> {
    if (!this.db) await this.init();
    this.db.run("DELETE FROM projects WHERE id = ?", [id]);
    this.save();
  }

  // ===========================================================================
  // 📰 BLOG CRUD
  // ===========================================================================

  async getBlogPosts(): Promise<BlogPost[]> {
    if (!this.db) await this.init();
    const res = this.db.exec("SELECT * FROM blog_posts");
    if (res.length === 0) return [];
    return this.mapResults<BlogPost>(res[0]);
  }

  async addBlogPost(post: BlogPost): Promise<void> {
    if (!this.db) await this.init();
    this.db.run(
      "INSERT INTO blog_posts (title, excerpt, date, category, readTime, url) VALUES (?, ?, ?, ?, ?, ?)",
      [post.title, post.excerpt, post.date, post.category, post.readTime, post.url]
    );
    this.save();
  }

  async deleteBlogPost(id: number): Promise<void> {
    if (!this.db) await this.init();
    this.db.run("DELETE FROM blog_posts WHERE id = ?", [id]);
    this.save();
  }

  // ===========================================================================
  // 🛒 ORDERS CRUD
  // ===========================================================================

  async getOrders(): Promise<Order[]> {
    if (!this.db) await this.init();
    const res = this.db.exec("SELECT * FROM orders ORDER BY id DESC");
    if (res.length === 0) return [];
    
    return this.mapResults<Order>(res[0], (col, val) => {
      if (col === 'items') {
        try { return JSON.parse(val); } catch (e) { return []; }
      }
      return val;
    });
  }

  async createOrder(order: Order): Promise<void> {
    if (!this.db) await this.init();
    this.db.run(
      "INSERT INTO orders (customerName, customerEmail, totalAmount, status, paymentMethod, paymentReference, items, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [order.customerName, order.customerEmail, order.totalAmount, order.status, order.paymentMethod, order.paymentReference, JSON.stringify(order.items), order.date]
    );
    this.save();
  }

  async updateOrderStatus(id: number, status: OrderStatus): Promise<void> {
    if (!this.db) await this.init();
    this.db.run("UPDATE orders SET status = ? WHERE id = ?", [status, id]);
    this.save();
  }

  // ===========================================================================
  // 🛠️ UTILS
  // ===========================================================================

  /**
   * Helper para transformar el resultado crudo de sql.js en objetos JS limpios.
   */
  private mapResults<T>(resultSet: any, transform?: (col: string, val: any) => any): T[] {
    const columns = resultSet.columns;
    const values = resultSet.values;

    return values.map((row: any[]) => {
      const obj: any = {};
      columns.forEach((col: string, index: number) => {
        let value = row[index];
        if (transform) {
          value = transform(col, value);
        }
        obj[col] = value;
      });
      return obj as T;
    });
  }
}

// Singleton Export
export const dbService = new SQLiteService();