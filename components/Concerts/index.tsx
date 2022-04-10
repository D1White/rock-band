import { useState } from 'react';
import Image from 'next/image';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Concerts.module.scss';

import Concert from '@components/Concert';

import redPaperBg from '@img/red-paper-bg.jpg';
import SVGArrow from '@svg/arrow-top.svg';

const Concerts = () => {
  const concertsData = [
    {
      id: 1,
      date: '2022-01-18T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 2,
      date: '2022-01-19T00:00:00.000Z',
      place: 'Арт клуб "Теплый ламповый"',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 3,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 4,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 5,
      date: '2022-01-18T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 6,
      date: '2022-01-19T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 7,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 8,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 9,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 10,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
    {
      id: 11,
      date: '2022-01-20T00:00:00.000Z',
      place: 'Volume Club',
      city: 'Kyiv',
      location: 'https://goo.gl/maps/A3gN5avmthn51JAQ9',
    },
  ];

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
      <div className={styles.concerts}>
        <button
          className={`${styles.arrow} ${styles.arrowTop}`}
          onClick={prevSlide}
          disabled={swiperProgress.isBeginning}
        >
          <SVGArrow />
        </button>

        <Swiper
          direction="vertical"
          slidesPerView={10}
          spaceBetween={15}
          className={styles.slider}
          breakpoints={{
            599: {
              slidesPerView: 5,
            },
          }}
          onInit={(ev) => setSwiper(ev)}
          onProgress={(p) => setProgress(p)}
        >
          {concertsData.map((concert) => (
            <SwiperSlide key={concert.id}>
              <Concert
                date={concert.date}
                place={concert.place}
                city={concert.city}
                location={concert.location}
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
