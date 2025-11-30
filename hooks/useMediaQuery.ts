import { useState, useEffect } from 'react';

// 💡 Un custom hook para detectar el tamaño de la pantalla.
// Es una práctica moderna y eficiente para manejar lógica de responsive design en React.
// En lugar de usar CSS para ocultar/mostrar elementos, podemos no renderizarlos en absoluto.

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // ⚙️ Nos aseguramos de que `window` exista (para evitar errores en SSR, aunque aquí no aplique).
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // 🧩 Sincronizamos el estado inicial.
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      
      // 🧩 Creamos un listener para cuando el tamaño de la pantalla cambie.
      const listener = () => setMatches(media.matches);
      
      // ⚙️ Añadimos el listener. La forma moderna es con `addEventListener`.
      media.addEventListener('change', listener);
      
      // 🧹 Es CRUCIAL limpiar el listener cuando el componente se desmonte para evitar memory leaks.
      return () => media.removeEventListener('change', listener);
    }
  }, [matches, query]);

  return matches;
};
