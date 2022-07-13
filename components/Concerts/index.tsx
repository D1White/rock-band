import { useState, useRef, FC, useCallback, useMemo } from 'react';
import Image from 'next/image';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import styles from './Concerts.module.scss';
import Concert from '@components/Concert';
import { useOnScreen } from 'hooks';
import redPaperBg from '@img/red-paper-bg.jpg';
import SVGArrow from '@svg/arrow-top.svg';
import { IConcert } from 'types/contentful';

interface Props {
  concerts?: IConcert[];
}

const Concerts: FC<Props> = ({ concerts }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, true);

  const [swiper, setSwiper] = useState<SwiperType>();
  const [swiperProgress, setSwiperProgress] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const filterConcerts = useMemo(() => {
    if (!concerts) return [];
    const date = new Date();
    return concerts.filter((concert) => {
      const concertDate = new Date(concert.fields.date);
      return +date <= +concertDate;
    });
  }, [concerts]);

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
    <section className={styles.wrapper} id="concerts">
      <div className={styles.concerts} ref={ref}>
        <button
          className={cn(styles.arrow, styles.arrowTop)}
          onClick={prevSlide}
          disabled={swiperProgress.isBeginning}
          aria-label="arrow top"
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
          onInit={setSwiper}
          onProgress={setProgress}
        >
          {filterConcerts.map((concert, idx) => (
            <SwiperSlide key={concert.sys.id}>
              <Concert
                date={concert.fields.date}
                place={concert.fields.place}
                city={concert.fields.city}
                location={concert.fields.location}
                idx={idx}
                animate={isVisible}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={cn(styles.arrow, styles.arrowBottom)}
          onClick={nextSlide}
          disabled={swiperProgress.isEnd}
          aria-label="arrow bottom"
        >
          <SVGArrow />
        </button>
      </div>
      <div className={styles.bg}>
        <Image src={redPaperBg} layout="fill" alt="red paper" />
      </div>
    </section>
  );
};

export default Concerts;
