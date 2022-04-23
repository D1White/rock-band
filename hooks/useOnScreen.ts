import { useEffect, useState, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, once?: boolean) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [worked, setWorked] = useState(false);

  let observer: IntersectionObserver;

  if (typeof window !== 'undefined' && window.document) {
    observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
  }

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && once) {
      setWorked(true);
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (once && worked) {
      observer?.disconnect();
    }
  }, [worked]);

  return !worked ? isIntersecting : true;
};
