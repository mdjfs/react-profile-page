import { useEffect, useMemo, useState } from 'react';

export function useOrientation() {
  const [width, setWidth] = useState<Number>();
  const [height, setHeight] = useState<Number>();

  function changeOrientation() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    const handler = () => changeOrientation();

    window.addEventListener("resize", handler);

    changeOrientation();

    return () => window.removeEventListener("resize", handler);
  }, []);

  const isPortrait = useMemo(() => width && height && height > width, [width, height]);
  const isLandscape = useMemo(() => width && height && width > height, [width, height]);

  return { isPortrait, isLandscape, width, height };
}