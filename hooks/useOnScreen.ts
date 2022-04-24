import { useEffect, useState, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, once?: boolean, delay?: number) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [worked, setWorked] = useState(false);

  let observer: IntersectionObserver;

  if (typeof window !== 'undefined' && window.document) {
    observer = new IntersectionObserver(([entry]) => {
      if (delay) {
        setTimeout(() => {
          setIntersecting(entry.isIntersecting);
        }, delay);
      } else {
        setIntersecting(entry.isIntersecting);
      }
    });
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
