import { useState } from 'react';
import Image from 'next/image';

import styles from './Albums.module.scss';

import Album from 'components/Album';

import blackPaper from 'assets/img/black-paper.jpg';

const AlbumsSection = () => {
  const albums = [
    {
      cover:
        'https://e.snmc.io/i/600/s/f3f1c346c220338e92366426ec4e053d/8749562/gspd-%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BA%D0%BB%D1%83%D0%B1-cover-art.jpg',
      name: 'Album title 1',
      year: '2020',
      link: '#',
    },
    {
      cover:
        'https://cdns-images.dzcdn.net/images/cover/06e2ca5b1511fe52fd3133c8433f2b14/264x264.jpg',
      name: 'Album title 2',
      year: '2021',
      link: '#',
    },
    {
      cover: 'https://images.genius.com/d30e4e36556eea2525426e256337c0db.1000x1000x1.jpg',
      name: 'Album title 3',
      year: '2022',
      link: '#',
    },
  ];

  const [activeAlbum, setActiveAlbum] = useState(1);

  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.container}`}>
        {albums.map((album, idx) => (
          <Album
            cover={album.cover}
            name={album.name}
            link={album.link}
            year={album.year}
            active={activeAlbum === idx}
            key={`${album.name}_${album.year}`}
            index={idx}
            setActiveAlbum={setActiveAlbum}
          />
        ))}
      </div>
      <div className={styles.bg}>
        <Image src={blackPaper} layout="fill" />
      </div>
    </section>
  );
};

export default AlbumsSection;
