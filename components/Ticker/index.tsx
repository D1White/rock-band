import { useEffect, useRef } from 'react';
import { gsap, Linear } from 'gsap';

import styles from './Ticker.module.scss';

const Ticker = () => {
  const ticker = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ticker.current) {
      gsap.fromTo(
        ticker.current,
        { xPercent: 0 },
        {
          xPercent: -50.35,
          duration: 30,
          ease: Linear.easeNone,
          repeat: -1,
        },
      );
    }
  }, []);

  return (
    <section className={styles.wrapper} id="gallery">
      <ul className={styles.ticker} ref={ticker}>
        {new Array(8).fill(null).map((_, idx) => (
          <li className={styles.text} key={idx}>
            зашибись
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ticker;
