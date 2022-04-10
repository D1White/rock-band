import { useRef, useEffect, FC } from 'react';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './AnimScale.module.scss';

gsap.registerPlugin(scrollTrigger);

interface AnimScaleProps {
  waitReloader?: boolean;
  direction?: 'up' | 'down';
}

const AnimScale: FC<AnimScaleProps> = ({ children, waitReloader = false, direction = 'down' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaderPlayedStorage = sessionStorage.getItem('loaderPlayed');
    const tlDelay = loaderPlayedStorage !== 'true' && waitReloader ? 4 : 0;

    const tl = gsap.timeline({
      scrollTrigger: ref.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      ref.current,
      {
        scale: direction === 'down' ? 1.2 : 0.8,
      },
      {
        scale: 1,
        duration: 1,
        ease: Power1.easeOut,
        delay: tlDelay,
      },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      {children}
    </div>
  );
};

export default AnimScale;
