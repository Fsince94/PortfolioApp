import type { Project, BlogPost } from '../types';

// 🧩 Definimos un tipo genérico para los datos de habilidades.
type SkillsData = { [key: string]: string[] };

// FIX: Definimos la interfaz para el objeto de traducción.
export interface Translation {
  nav_home: string;
  nav_about: string;
  nav_projects: string;
  nav_skills: string;
  nav_blog: string; 
  nav_contact: string;
  nav_admin?: string; // Optional
  app_title: string;
  toggle_theme_label: string;
  toggle_language_label: string;
  light_mode: string;
  dark_mode: string;
  home_welcome_title: string;
  home_welcome_subtitle: string;
  about_title: string;
  about_greeting: string;
  about_jobTitle: string;
  about_github_button: string;
  about_linkedin_button: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  projects_title: string;
  projects_technologies_label: string;
  project_buy_button: string; 
  projects_data: Project[]; // 💡 Usamos la interfaz Project compartida
  skills_title: string;
  skills_technical_title: string;
  skills_technologies_title: string;
  skills_soft_title: string;
  skills_technical_data: SkillsData;
  skills_technologies_data: SkillsData;
  skills_soft_data: SkillsData;
  blog_title: string; 
  blog_subtitle: string; 
  blog_read_more: string; 
  blog_posts: BlogPost[]; // 💡 Usamos la interfaz BlogPost compartida
  contact_title: string;
  contact_intro: string;
  contact_form_name: string;
  contact_form_email: string;
  contact_form_message: string;
  contact_form_button: string;
  contact_form_button_submitting: string;
  contact_form_success_title: string;
  contact_form_success_message: string;
  contact_form_success_button: string;
  contact_whatsapp_tooltip: string;
  auth_login_title: string;
  auth_register_title: string;
  auth_email_label: string;
  auth_password_label: string;
  auth_name_label: string;
  auth_login_button: string;
  auth_register_button: string;
  auth_logout_button: string; // New
  auth_toggle_to_register: string;
  auth_toggle_to_login: string;
  auth_success_login: string;
  auth_success_register: string;
  
  // 🛒 Cart & Checkout
  cart_title: string;
  cart_empty: string;
  cart_total: string;
  cart_checkout_button: string;
  checkout_title: string;
  checkout_name_label: string;
  checkout_email_label: string;
  checkout_method_label: string;
  checkout_reference_label: string;
  checkout_submit_button: string;
  checkout_success_title: string;
  checkout_success_message: string;
  payment_method_pago_movil: string;
  payment_method_binance: string;
  payment_method_kontigo: string;
  payment_details_title: string;
  
  // 👔 Admin Orders
  admin_orders_title: string;
  admin_status_pending: string;
  admin_status_approved: string;
  admin_status_rejected: string;
  admin_approve_button: string;
  admin_reject_button: string;
}

export const translations: { en: Translation; es: Translation } = {
  en: {
    // App/Navigation
    nav_home: 'Home',
    nav_about: 'About Me',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    app_title: 'Portfolio',
    toggle_theme_label: 'Toggle theme',
    toggle_language_label: 'Change language',
    light_mode: 'Light Mode',
    dark_mode: 'Dark Mode',

    // Home View
    home_welcome_title: "Welcome",
    home_welcome_subtitle: "Feel free to explore my portfolio.",

    // About View
    about_title: "About Me",
    about_greeting: "Joaquin Laurens",
    about_jobTitle: "Frontend Developer & UI/UX Enthusiast",
    about_github_button: "GitHub",
    about_linkedin_button: "LinkedIn",
    about_p1: "Hello! I'm Joaquin, a passionate frontend developer with a keen eye for design and a love for creating intuitive digital experiences. My journey into web development started with a fascination for how things work on the internet, which quickly evolved into a full-fledged passion for coding and user-centric design.",
    about_p2: "With over 5 years of experience in the field, I specialize in React, TypeScript, and modern CSS frameworks like Tailwind CSS. I thrive on turning complex problems into simple, beautiful, and interactive designs. I believe that a great user interface is not just about aesthetics, but also about functionality, accessibility, and performance.",
    about_p3: "When I'm not coding, you can find me exploring new coffee shops, hiking in the mountains, or contributing to open-source projects.",

    // Projects View
    projects_title: "My Projects",
    projects_technologies_label: "Technologies:",
    project_buy_button: "Buy Now",
    projects_data: [
      {
        title: 'E-commerce Platform',
        description: 'A fully responsive e-commerce site built with Next.js, featuring a custom CMS and Stripe integration for payments.',
        roles: ['Frontend', 'Backend', 'API'],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        buyUrl: 'https://example.com/buy-ecommerce',
        price: 199.99
      },
      {
        title: 'Project Management Tool',
        description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, inspired by Trello.',
        roles: ['Frontend', 'Backend'],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
        buyUrl: 'https://example.com/buy-pm-tool',
        price: 149.50
      },
      {
        title: 'Personal Blog',
        description: 'A static-generated blog using Astro and MDX, focusing on performance and SEO. Features a clean, minimalist design.',
        roles: ['Frontend'],
        technologies: ['Vite', 'TypeScript', 'Tailwind CSS'],
        price: 49.99
      },
    ],

    // Skills View
    skills_title: "My Skills",
    skills_technical_title: "Technical Skills",
    skills_technologies_title: "Technologies & Tools",
    skills_soft_title: "Soft Skills",
    skills_technical_data: {
      'Languages': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
      'Frameworks & Libraries': ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express'],
      'Styling': ['Sass', 'Tailwind CSS', 'Styled Components', 'Framer Motion'],
    },
    skills_technologies_data: {
      'Tools & Platforms': ['Git & GitHub', 'Webpack', 'Vite', 'Firebase', 'Vercel'],
    },
    skills_soft_data: {
      'Communication': ['Team Collaboration', 'Active Listening', 'Clear Communication'],
      'Problem Solving': ['Critical Thinking', 'Creativity', 'Adaptability'],
      'Leadership': ['Mentoring', 'Decision Making', 'Empathy'],
    },

    // Blog View
    blog_title: "Latest News",
    blog_subtitle: "Thoughts, tutorials, and updates from the tech world.",
    blog_read_more: "Read Article",
    blog_posts: [
      {
        title: "Mastering React Server Components",
        excerpt: "A deep dive into how RSCs are changing the way we build performant web applications in 2024.",
        date: "Oct 12, 2023",
        category: "Development",
        readTime: "5 min read",
        url: "#"
      },
      {
        title: "The Future of CSS: Container Queries",
        excerpt: "Why media queries are becoming obsolete and how container queries enable true modular design.",
        date: "Sep 28, 2023",
        category: "Design",
        readTime: "4 min read",
        url: "#"
      },
      {
        title: "Improving Web Accessibility",
        excerpt: "Simple yet effective strategies to ensure your applications are usable by everyone.",
        date: "Aug 15, 2023",
        category: "Accessibility",
        readTime: "6 min read",
        url: "#"
      }
    ],

    // Contact View
    contact_title: "Get In Touch",
    contact_intro: "I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to say hi, feel free to reach out. I'll get back to you!",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_button: "Send Message",
    contact_form_button_submitting: "Sending...",
    contact_form_success_title: "Message Sent!",
    contact_form_success_message: "Thanks for reaching out. I'll get back to you soon!",
    contact_form_success_button: "Send Another Message",
    contact_whatsapp_tooltip: "Chat on WhatsApp",

    // Authentication
    auth_login_title: "Welcome Back",
    auth_register_title: "Create Account",
    auth_email_label: "Email or User ID",
    auth_password_label: "Password",
    auth_name_label: "Full Name",
    auth_login_button: "Sign In",
    auth_register_button: "Sign Up",
    auth_logout_button: "Sign Out",
    auth_toggle_to_register: "Don't have an account? Sign up",
    auth_toggle_to_login: "Already have an account? Sign in",
    auth_success_login: "Successfully logged in!",
    auth_success_register: "Account created successfully!",
    
    // Cart & Checkout
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty.",
    cart_total: "Total",
    cart_checkout_button: "Proceed to Checkout",
    checkout_title: "Checkout",
    checkout_name_label: "Full Name",
    checkout_email_label: "Email Address",
    checkout_method_label: "Payment Method",
    checkout_reference_label: "Payment Reference / ID",
    checkout_submit_button: "Confirm Order",
    checkout_success_title: "Order Received!",
    checkout_success_message: "We have received your payment report. An admin will verify it shortly.",
    payment_method_pago_movil: "Pago Móvil",
    payment_method_binance: "Binance Pay",
    payment_method_kontigo: "Kontigo",
    payment_details_title: "Payment Details",
    
    // Admin Orders
    admin_orders_title: "Orders Management",
    admin_status_pending: "Pending",
    admin_status_approved: "Approved",
    admin_status_rejected: "Rejected",
    admin_approve_button: "Approve Payment",
    admin_reject_button: "Reject",
  },
  es: {
    // App/Navigation
    nav_home: 'Inicio',
    nav_about: 'Sobre Mí',
    nav_projects: 'Proyectos',
    nav_skills: 'Habilidades',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',
    app_title: 'Portafolio',
    toggle_theme_label: 'Cambiar tema',
    toggle_language_label: 'Cambiar idioma',
    light_mode: 'Modo Claro',
    dark_mode: 'Modo Oscuro',

    // Home View
    home_welcome_title: "Bienvenido",
    home_welcome_subtitle: "Siéntete libre de explorar mi portafolio.",
    
    // About View
    about_title: "Sobre Mí",
    about_greeting: "Joaquin Laurens",
    about_jobTitle: "Desarrollador Frontend y Entusiasta UI/UX",
    about_github_button: "GitHub",
    about_linkedin_button: "LinkedIn",
    about_p1: "¡Hola! Soy Joaquin, un apasionado desarrollador frontend con un buen ojo para el diseño y un amor por crear experiencias digitales intuitivas. Mi viaje en el desarrollo web comenzó con una fascinación por cómo funcionan las cosas en internet, que rápidamente evolucionó a una pasión total por la programación y el diseño centrado en el usuario.",
    about_p2: "Con más de 5 años de experiencia en el campo, me especializo en React, TypeScript y frameworks de CSS modernos como Tailwind CSS. Me encanta convertir problemas complejos en diseños simples, hermosos e interactivos. Creo que una gran interfaz de usuario no se trata solo de estética, sino también de funcionalidad, accesibilidad y rendimiento.",
    about_p3: "Cuando no estoy programando, me puedes encontrar explorando nuevas cafeterías, haciendo senderismo en las montañas o contribuyendo a proyectos de código abierto.",

    // Projects View
    projects_title: "Mis Proyectos",
    projects_technologies_label: "Tecnologías:",
    project_buy_button: "Comprar Ahora",
    projects_data: [
      {
        title: 'Plataforma de E-commerce',
        description: 'Un sitio de comercio electrónico totalmente responsivo construido con Next.js, con un CMS personalizado e integración con Stripe para pagos.',
        roles: ['Frontend', 'Backend', 'API'],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        buyUrl: 'https://example.com/buy-ecommerce',
        price: 199.99
      },
      {
        title: 'Herramienta de Gestión de Proyectos',
        description: 'Una herramienta colaborativa para que los equipos gestionen tareas, sigan el progreso y se comuniquen eficazmente, inspirada en Trello.',
        roles: ['Frontend', 'Backend'],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
        buyUrl: 'https://example.com/buy-pm-tool',
        price: 149.50
      },
      {
        title: 'Blog Personal',
        description: 'Un blog generado estáticamente usando Astro y MDX, enfocado en el rendimiento y SEO. Presenta un diseño limpio y minimalista.',
        roles: ['Frontend'],
        technologies: ['Vite', 'TypeScript', 'Tailwind CSS'],
        price: 49.99
      },
    ],

    // Skills View
    skills_title: "Mis Habilidades",
    skills_technical_title: "Habilidades Técnicas",
    skills_technologies_title: "Tecnologías y Herramientas",
    skills_soft_title: "Habilidades Blandas",
    skills_technical_data: {
      'Lenguajes': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
      'Frameworks & Librerías': ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express'],
      'Estilos': ['Sass', 'Tailwind CSS', 'Styled Components', 'Framer Motion'],
    },
    skills_technologies_data: {
      'Herramientas & Plataformas': ['Git & GitHub', 'Webpack', 'Vite', 'Firebase', 'Vercel'],
    },
    skills_soft_data: {
      'Comunicación': ['Colaboración en Equipo', 'Escucha Activa', 'Comunicación Clara'],
      'Resolución de Problemas': ['Pensamiento Crítico', 'Creatividad', 'Adaptabilidad'],
      'Liderazgo': ['Mentoría', 'Toma de Decisiones', 'Empatía'],
    },

    // Blog View
    blog_title: "Últimas Noticias",
    blog_subtitle: "Reflexiones, tutoriales y novedades del mundo tech.",
    blog_read_more: "Leer Artículo",
    blog_posts: [
      {
        title: "Dominando React Server Components",
        excerpt: "Un análisis profundo sobre cómo los RSC están cambiando la forma en que construimos aplicaciones web performantes en 2024.",
        date: "12 Oct, 2023",
        category: "Desarrollo",
        readTime: "5 min lectura",
        url: "#"
      },
      {
        title: "El Futuro de CSS: Container Queries",
        excerpt: "Por qué los media queries se están volviendo obsoletos y cómo los container queries permiten un verdadero diseño modular.",
        date: "28 Sep, 2023",
        category: "Diseño",
        readTime: "4 min lectura",
        url: "#"
      },
      {
        title: "Mejorando la Accesibilidad Web",
        excerpt: "Estrategias simples pero efectivas para asegurar que tus aplicaciones sean utilizables por todos.",
        date: "15 Ago, 2023",
        category: "Accesibilidad",
        readTime: "6 min lectura",
        url: "#"
      }
    ],

    // Contact View
    contact_title: "Ponte en Contacto",
    contact_intro: "Actualmente estoy disponible para trabajos freelance y abierto a discutir nuevos proyectos. Ya sea que tengas una pregunta o simplemente quieras saludar, no dudes en escribirme. ¡Te responderé!",
    contact_form_name: "Nombre",
    contact_form_email: "Correo electrónico",
    contact_form_message: "Mensaje",
    contact_form_button: "Enviar Mensaje",
    contact_form_button_submitting: "Enviando...",
    contact_form_success_title: "¡Mensaje Enviado!",
    contact_form_success_message: "Gracias por contactarme. ¡Te responderé pronto!",
    contact_form_success_button: "Enviar Otro Mensaje",
    contact_whatsapp_tooltip: "Chatear por WhatsApp",

    // Authentication
    auth_login_title: "Bienvenido",
    auth_register_title: "Crear Cuenta",
    auth_email_label: "Correo o Usuario",
    auth_password_label: "Contraseña",
    auth_name_label: "Nombre Completo",
    auth_login_button: "Iniciar Sesión",
    auth_register_button: "Registrarse",
    auth_logout_button: "Cerrar Sesión",
    auth_toggle_to_register: "¿No tienes cuenta? Regístrate",
    auth_toggle_to_login: "¿Ya tienes cuenta? Inicia sesión",
    auth_success_login: "¡Inicio de sesión exitoso!",
    auth_success_register: "¡Cuenta creada exitosamente!",
    
    // Cart & Checkout
    cart_title: "Tu Carrito",
    cart_empty: "Tu carrito está vacío.",
    cart_total: "Total",
    cart_checkout_button: "Ir al Pago",
    checkout_title: "Finalizar Compra",
    checkout_name_label: "Nombre Completo",
    checkout_email_label: "Correo Electrónico",
    checkout_method_label: "Método de Pago",
    checkout_reference_label: "Referencia / ID de Pago",
    checkout_submit_button: "Confirmar Orden",
    checkout_success_title: "¡Orden Recibida!",
    checkout_success_message: "Hemos recibido tu reporte de pago. Un administrador lo verificará pronto.",
    payment_method_pago_movil: "Pago Móvil",
    payment_method_binance: "Binance Pay",
    payment_method_kontigo: "Kontigo",
    payment_details_title: "Datos de Pago",
    
    // Admin Orders
    admin_orders_title: "Gestión de Órdenes",
    admin_status_pending: "Pendiente",
    admin_status_approved: "Aprobado",
    admin_status_rejected: "Rechazado",
    admin_approve_button: "Aprobar Pago",
    admin_reject_button: "Rechazar",
  }
};