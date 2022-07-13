import { useState, FC, useCallback } from 'react';
import cn from 'classnames';
import SwiperType, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Gallery.module.scss';
import { AnimScale } from '@components/animations';
import SVGArrow from '@svg/arrow-top.svg';
import { IGallery } from 'types/contentful';

const GalleryImg = ({ src, alt }: { src: string; alt: string }) => (
  <picture>
    <source srcSet={`${src}?fm=webp`} type="image/webp" />
    <img src={src} alt={alt} />
  </picture>
);

interface Props {
  data: IGallery;
}

const Gallery: FC<Props> = ({ data }) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [swiperProgress, setSwiperProgress] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const nextSlide = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  const prevSlide = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const setProgress = useCallback((sw: SwiperType) => {
    if (sw) {
      setSwiperProgress({
        isBeginning: sw.isBeginning,
        isEnd: sw.isEnd,
      });
    }
  }, []);

  return (
    <section className={styles.wrapper}>
      <button
        className={cn(styles.btn, styles.leftBtn)}
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
        onInit={setSwiper}
        onProgress={setProgress}
        className={`${styles.gallery} gallery`}
      >
        {data.fields?.photo.map((photo, idx) => (
          <SwiperSlide key={photo.sys.id}>
            <div className={styles.img}>
              {idx === 0 ? (
                <AnimScale delay={1}>
                  <GalleryImg src={photo.fields.file.url} alt={photo.fields.title} />
                </AnimScale>
              ) : (
                <GalleryImg src={photo.fields.file.url} alt={photo.fields.title} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={cn(styles.btn, styles.rightBtn)}
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
