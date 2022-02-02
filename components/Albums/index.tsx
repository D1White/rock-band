import { useState } from 'react';
import Image from 'next/image';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Albums.module.scss';

import Album from 'components/Album';

import blackPaper from 'assets/img/black-paper.jpg';

const AlbumsSection = () => {
  const albums = [
    {
      cover:
        'https://lh3.googleusercontent.com/9dML6IsjeogHbTP3Ei_wuHM49qxvB4rIlwFCdav-nOv3Js3Dc8_st_7xjzrtCEx4VeKKVel3cKGOE1w=w544-h544-l90-rj',
      name: 'Live Action Album',
      year: '2022',
      link: 'https://allmylinks.com/scytherband',
    },
    {
      cover:
        'https://cdns-images.dzcdn.net/images/cover/06e2ca5b1511fe52fd3133c8433f2b14/264x264.jpg',
      name: 'Album title 2',
      year: '2021',
      link: 'https://allmylinks.com/scytherband',
    },
    {
      cover: 'https://images.genius.com/d30e4e36556eea2525426e256337c0db.1000x1000x1.jpg',
      name: 'Album title 3',
      year: '2022',
      link: 'https://allmylinks.com/scytherband',
    },
    {
      cover: 'https://images.genius.com/d30e4e36556eea2525426e256337c0db.1000x1000x1.jpg',
      name: 'Album title 4',
      year: '2022',
      link: 'https://allmylinks.com/scytherband',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.container}`}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          slideToClickedSlide={true}
          grabCursor={true}
          speed={800}
        >
          {albums.map((album, idx) => (
            <SwiperSlide key={`${album.name}_${album.year}`}>
              <Album
                cover={album.cover}
                name={album.name}
                link={album.link}
                year={album.year}
                index={idx}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.bg}>
        <Image src={blackPaper} layout="fill" />
      </div>
    </section>
  );
};

export default AlbumsSection;