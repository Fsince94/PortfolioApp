import { useState, useEffect, useCallback } from 'react';
import { dbService } from '../lib/sqliteService';
import type { Project, BlogPost, Order, OrderStatus } from '../types';

export const useDatabase = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const refreshData = useCallback(async () => {
    try {
      const projData = await dbService.getProjects();
      const blogData = await dbService.getBlogPosts();
      const ordersData = await dbService.getOrders();
      setProjects(projData);
      setBlogPosts(blogData);
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const initDB = useCallback(async () => {
    setLoading(true);
    await dbService.init();
    setIsInitialized(true);
    await refreshData();
    setLoading(false);
  }, [refreshData]);

  // Projects Ops
  const addProject = async (project: Project) => {
    await dbService.addProject(project);
    // Refresh triggered by event
  };

  const deleteProject = async (id: number) => {
    await dbService.deleteProject(id);
  };

  // Blog Ops
  const addBlogPost = async (post: BlogPost) => {
    await dbService.addBlogPost(post);
  };

  const deleteBlogPost = async (id: number) => {
    await dbService.deleteBlogPost(id);
  };

  // Order Ops
  const createOrder = async (order: Order) => {
    await dbService.createOrder(order);
  };

  const updateOrderStatus = async (id: number, status: OrderStatus) => {
    await dbService.updateOrderStatus(id, status);
  };

  const login = async (u: string, p: string) => {
    return await dbService.login(u, p);
  };

  useEffect(() => {
    initDB();
  }, [initDB]);

  // 🚀 LISTENER: Escuchar cambios globales en la DB
  useEffect(() => {
    const handleDbChange = () => {
      if (isInitialized) {
        refreshData();
      }
    };

    window.addEventListener('portfolio-db-change', handleDbChange);
    return () => {
      window.removeEventListener('portfolio-db-change', handleDbChange);
    };
  }, [isInitialized, refreshData]);

  return {
    projects,
    blogPosts,
    orders,
    loading,
    isInitialized,
    addProject,
    deleteProject,
    addBlogPost,
    deleteBlogPost,
    createOrder,
    updateOrderStatus,
    login,
    refreshData
  };
};