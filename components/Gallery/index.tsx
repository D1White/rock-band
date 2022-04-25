import { useState, FC } from 'react';
import classNames from 'classnames';
import SwiperType, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Gallery.module.scss';

import { AnimScale } from '@components/animations';

import SVGArrow from '@svg/arrow-top.svg';

import { IGallery } from 'types/contentful';

interface Props {
  data: IGallery;
}

const Gallery: FC<Props> = ({ data }) => {
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
        className={classNames(styles.btn, styles.leftBtn)}
        onClick={prevSlide}
        disabled={swiperProgress.isBeginning}
        aria-label="arrow left"
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
        {data.fields?.photo.map((photo, idx) => (
          <SwiperSlide key={photo.sys.id}>
            <div className={styles.img}>
              {idx === 0 ? (
                <AnimScale delay={1}>
                  <img src={photo.fields.file.url} alt={photo.fields.title} />
                </AnimScale>
              ) : (
                <img src={photo.fields.file.url} alt={photo.fields.title} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={classNames(styles.btn, styles.rightBtn)}
        onClick={nextSlide}
        disabled={swiperProgress.isEnd}
        aria-label="arrow right"
      >
        <SVGArrow />
      </button>
    </section>
  );
};

export default Gallery;
