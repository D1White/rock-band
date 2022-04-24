import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import styles from './Albums.module.scss';

import Album from '@components/Album';
import { useOnScreen } from 'hooks';

import blackPaper from '@img/black-paper.jpg';
import SVGArrowSwipe from '@svg/arrow-swipe.svg';

import { albums } from 'constants/albums';

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
