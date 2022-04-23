import { FC, useEffect, useRef, memo } from 'react';
import { gsap, Power1 } from 'gsap';

import styles from './Concert.module.scss';

interface ConcertProps {
  date: string;
  place: string;
  city: string;
  location: string;
  idx: number;
  animate: boolean;
}

const Concert: FC<ConcertProps> = ({ date, place, city, location, animate, idx }) => {
  const dateRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);

  const convertDate = new Date(date);
  const stringDate = convertDate.toString();

  const tl = gsap.timeline();

  useEffect(() => {
    return () => {
      tl?.kill();
    };
  }, []);

  useEffect(() => {
    const delay = 0.3 * idx + 1;

    if (animate && tl) {
      tl.fromTo(
        lineRef.current,
        { width: 0 },
        { width: '100%', duration: 1, ease: Power1.easeOut, delay: delay },
        0,
      )
        .fromTo(
          dateRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: Power1.easeOut, delay: delay },
          0.5,
        )
        .fromTo(
          infoRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: Power1.easeOut, delay: delay },
          0.5,
        )
        .fromTo(
          locationRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: Power1.easeOut, delay: delay },
          0.5,
        );
    }
  }, [animate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.date} ref={dateRef}>
        {stringDate && <span className={styles.day}>{stringDate.slice(8, 10)}</span>}
        {stringDate && <span className={styles.month}>{stringDate.slice(4, 7)}</span>}
      </div>

      <div className={styles.info} ref={infoRef}>
        <p className={styles.place}>{place}</p>
        <p className={styles.city}>{city}</p>
      </div>

      <a
        href={location}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.location}
        ref={locationRef}
      >
        location
      </a>

      <hr className={styles.line} ref={lineRef} />
    </div>
  );
};

export default memo(Concert);
