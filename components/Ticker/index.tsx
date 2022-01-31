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
    <section className={styles.wrapper}>
      <ul className={styles.ticker} ref={ticker}>
        <li className={styles.text}>зашибись</li>
        <li className={styles.text}>зашибись</li>
        <li className={styles.text}>зашибись</li>
        <li className={styles.text}>зашибись</li>

        <li className={`${styles.text} ${styles.last}`}>зашибись</li>
        <li className={styles.text}>зашибись</li>
        <li className={styles.text}>зашибись</li>
        <li className={styles.text}>зашибись</li>
      </ul>
    </section>
  );
};

export default Ticker;
