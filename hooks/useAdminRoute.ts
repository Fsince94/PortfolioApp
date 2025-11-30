import { useState, useEffect } from 'react';

/**
 * 💡 Hook personalizado para manejar el enrutamiento simple basado en Hash.
 * 
 * Principio SOLID: Single Responsibility Principle (SRP).
 * Este hook tiene la única responsabilidad de detectar si el usuario está en la ruta de administración.
 * Elimina esta lógica del componente App principal.
 */
export const useAdminRoute = () => {
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    // Función para verificar el hash actual
    const checkHash = () => {
      // 🛡️ Normalizamos el hash para evitar errores de tipeo o sensibilidad a mayúsculas
      setIsAdminRoute(window.location.hash.toLowerCase() === '#admin');
    };

    // Verificación inicial
    checkHash();

    // 👂 Escuchamos cambios en la URL (Navegación del usuario)
    window.addEventListener('hashchange', checkHash);

    // 🧹 Cleanup: Removemos el listener al desmontar para evitar memory leaks
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return isAdminRoute;
};