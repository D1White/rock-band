import { useRef, useEffect, FC } from 'react';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './AnimScale.module.scss';

import { useLoaderPlayed } from 'hooks';

gsap.registerPlugin(scrollTrigger);

interface AnimScaleProps {
  waitReloader?: boolean;
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  power?: 1 | 2 | 3;
}

export const AnimScale: FC<AnimScaleProps> = ({
  children,
  waitReloader = false,
  direction = 'down',
  duration,
  delay = 0,
  power = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const loaderPlayed = useLoaderPlayed();

  useEffect(() => {
    const tlDelay = !loaderPlayed && waitReloader ? 4 : delay;

    const tl = gsap.timeline({
      scrollTrigger: ref.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      ref.current,
      {
        scale: direction === 'down' ? 1 + 0.2 * power : 1 - 0.2 * power,
      },
      {
        scale: 1,
        duration: duration || 1,
        ease: Power1.easeOut,
        delay: tlDelay,
      },
    );

    return () => {
      tl.kill();
    };
  }, [loaderPlayed]);

  return (
    <div ref={ref} className={styles.wrapper}>
      {children}
    </div>
  );
};
