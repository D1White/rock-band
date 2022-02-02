import { FC } from 'react';
import { useSwiperSlide } from 'swiper/react';

import styles from './Album.module.scss';

interface AlbunFC {
  cover: string;
  name: string;
  year: string;
  link: string;
  index: number;
}

const Album: FC<AlbunFC> = ({ cover, name, year, link }) => {
  const swiperSlide = useSwiperSlide();

  const clickHandler = () => {
    console.log('click');
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.wrapper} ${swiperSlide.isActive ? styles.active : ''}`}
      onClick={clickHandler}
    >
      <div className={styles.cover}>
        <img
          src={cover}
          alt={name}
          className={`${styles.img} ${
            swiperSlide.isActive ? styles.activeCoverImg : styles.coverImg
          }`}
        />
      </div>
      <div className={`${styles.textBlock} ${swiperSlide.isActive ? styles.active : ''}`}>
        <p className={styles.name}>{name}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </a>
  );
};

export default Album;
