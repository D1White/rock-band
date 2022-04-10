import { useState } from 'react';
import Image from 'next/image';
import SwiperType, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Gallery.module.scss';

import photo from '@img/photo-1.jpg';
import SVGArrow from '@svg/arrow-top.svg';

const Gallery = () => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [swiperProgress, setSwiperProgress] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const setProgress = (sw: SwiperType) => {
    if (sw) {
      setSwiperProgress({
        isBeginning: sw.isBeginning,
        isEnd: sw.isEnd,
      });
    }
  };

  return (
    <section className={styles.wrapper}>
      <button
        className={`${styles.btn} ${styles.leftBtn}`}
        onClick={prevSlide}
        disabled={swiperProgress.isBeginning}
      >
        <SVGArrow />
      </button>

      <Swiper
        modules={[Pagination]}
        pagination={true}
        slidesPerView={1}
        spaceBetween={50}
        grabCursor={true}
        onInit={(ev) => setSwiper(ev)}
        onProgress={(p) => setProgress(p)}
        className={`${styles.gallery} gallery`}
      >
        {new Array(4).fill(null).map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.img}>
              <Image src={photo} alt="" layout="fill" objectFit="contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`${styles.btn} ${styles.rightBtn}`}
        onClick={nextSlide}
        disabled={swiperProgress.isEnd}
      >
        <SVGArrow />
      </button>
    </section>
  );
};

export default Gallery;
