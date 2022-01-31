import { Dispatch, FC } from 'react';
import Image from 'next/image';

import styles from './Album.module.scss';

import plate from 'assets/img/plate.png';

interface AlbunFC {
  cover: string;
  name: string;
  year: string;
  link: string;
  active: boolean;
  index: number;
  setActiveAlbum: Dispatch<number>;
}

const Album: FC<AlbunFC> = ({ cover, name, year, link, active, index, setActiveAlbum }) => {
  const clickHandler = () => {
    console.log('click');

    setActiveAlbum(index);
  };

  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      {active ? (
        <>
          <div className={styles.cover}>
            <img src={cover} alt={name} className={styles.activeCoverImg} />
            <div className={styles.plate}>
              <Image src={plate} alt="plate" />
            </div>
          </div>
          <div className={styles.textBlock}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.name}>
              {name}
            </a>
            <p className={styles.year}>{year}</p>
          </div>
        </>
      ) : (
        <img src={cover} alt={name} className={styles.coverImg} />
      )}
    </div>
  );
};

export default Album;
