import { useEffect, useState } from 'react';
import { PANEL_HEIGHT } from '@/features/Panel/Panel';

export const useCanvasSize = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight - PANEL_HEIGHT,
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight - PANEL_HEIGHT,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return canvasSize;
};
