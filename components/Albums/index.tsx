import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import styles from './Albums.module.scss';

import Album from '@components/Album';
import { useOnScreen } from 'hooks';

import blackPaper from '@img/black-paper.jpg';
import SVGArrowSwipe from '@svg/arrow-swipe.svg';

const albums = [
  {
    cover: 'https://i1.sndcdn.com/artworks-Mg8CeG7YcPlDozzN-Iy5rcg-t200x200.jpg',
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

const AlbumsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, true, 800);

  return (
    <section className={styles.wrapper} id="music">
      <div className={styles.swipe}>
        <span className={styles.swipeText}>swipe</span>
        <SVGArrowSwipe className={styles.swipeArrow} />
      </div>

      <div className={classNames('container', styles.container)} ref={ref}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          slideToClickedSlide={true}
          grabCursor={true}
          speed={800}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
          }}
        >
          {albums.map((album) => (
            <SwiperSlide key={`${album.name}_${album.year}`}>
              <Album
                cover={album.cover}
                name={album.name}
                link={album.link}
                year={album.year}
                animate={isVisible}
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
