import { useState, useEffect, RefObject } from 'react';

// 💡 Este hook detecta qué elemento (de una lista de IDs) está actualmente visible en el viewport.
// Se usa para actualizar la navegación del Sidebar automáticamente mientras el usuario hace scroll.
export const useScrollSpy = (
  ids: string[], 
  rootRef: RefObject<HTMLElement | null>,
  offset: string = "-40% 0px -60% 0px" // Detecta cuando el elemento cruza el centro de la pantalla
): string => {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    // ⚙️ Opciones del Observer
    const observerOptions = {
      root: container, // Observamos relativo al contenedor de scroll, no al viewport del navegador
      rootMargin: offset, 
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 🧩 Observamos cada sección por su ID
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, rootRef, offset]);

  return activeId;
};