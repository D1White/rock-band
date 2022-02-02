import { FC } from 'react';

import styles from './Concert.module.scss';

interface ConcertProps {
  date: string;
  place: string;
  city: string;
  location: string;
}

const Concert: FC<ConcertProps> = ({ date, place, city, location }) => {
  const convertDate = new Date(date);
  const stringDate = convertDate.toString();

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>
        {stringDate && <span className={styles.day}>{stringDate.slice(8, 10)}</span>}
        {stringDate && <span className={styles.month}>{stringDate.slice(4, 7)}</span>}
      </div>

      <div className={styles.info}>
        <p className={styles.place}>{place}</p>
        <p className={styles.city}>{city}</p>
      </div>

      <a href={location} target="_blank" rel="noopener noreferrer" className={styles.location}>
        location
      </a>

      <hr className={styles.line} />
    </div>
  );
};

export default Concert;
