import { FC } from 'react';
import { useSwiperSlide } from 'swiper/react';
import cn from 'classnames';

import styles from './Album.module.scss';

interface AlbunFC {
  cover: string;
  name: string;
  year: string;
  link: string;
  animate: boolean;
}

const Album: FC<AlbunFC> = ({ cover, name, year, link, animate }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        styles.wrapper,
        { [styles.active]: swiperSlide.isActive },
        { [styles.visible]: animate },
      )}
      aria-label={`${name} album`}
    >
      <div className={styles.cover}>
        <img
          src={cover}
          alt={name}
          className={cn(
            styles.img,
            {
              [styles.activeCoverImg]: swiperSlide.isActive,
              [styles.coverImg]: !swiperSlide.isActive,
            },
            { [styles.invisible]: !animate },
          )}
        />
      </div>
      <div
        className={cn(
          styles.textBlock,
          { [styles.active]: swiperSlide.isActive },
          { [styles.invisible]: !animate },
        )}
      >
        <p className={styles.name}>{name}</p>
        <p className={styles.year}>{year}</p>
      </div>
    </a>
  );
};

export default Album;
