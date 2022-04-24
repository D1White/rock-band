import { useState, useRef } from 'react';
import Image from 'next/image';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Concerts.module.scss';

import Concert from '@components/Concert';
import { useOnScreen } from 'hooks';

import redPaperBg from '@img/red-paper-bg.jpg';
import SVGArrow from '@svg/arrow-top.svg';

import { concertsData } from 'constants/concerts';

const Concerts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, true);

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
    <section className={styles.wrapper} id="concerts">
      <div className={styles.concerts} ref={ref}>
        <button
          className={`${styles.arrow} ${styles.arrowTop}`}
          onClick={prevSlide}
          disabled={swiperProgress.isBeginning}
        >
          <SVGArrow />
        </button>

        <Swiper
          direction="vertical"
          slidesPerView={7.5}
          spaceBetween={15}
          className={styles.slider}
          breakpoints={{
            376: {
              slidesPerView: 10,
            },
            600: {
              slidesPerView: 5,
            },
          }}
          onInit={(ev) => setSwiper(ev)}
          onProgress={(p) => setProgress(p)}
        >
          {concertsData.map((concert, idx) => (
            <SwiperSlide key={concert.id}>
              <Concert
                date={concert.date}
                place={concert.place}
                city={concert.city}
                location={concert.location}
                idx={idx}
                animate={isVisible}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${styles.arrow} ${styles.arrowBottom}`}
          onClick={nextSlide}
          disabled={swiperProgress.isEnd}
        >
          <SVGArrow />
        </button>
      </div>
      <div className={styles.bg}>
        <Image src={redPaperBg} layout="fill" />
      </div>
    </section>
  );
};

export default Concerts;
