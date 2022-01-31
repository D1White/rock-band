import React from 'react';
import Image from 'next/image';

import styles from './Concerts.module.scss';

import Concert from 'components/Concert';

import redPaperBg from 'assets/img/red-paper-bg.jpg';
import SVGArrow from 'assets/svg/arrow-top.svg';

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
      place: 'Volume Club',
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
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.concerts}>
        <button className={`${styles.arrow} ${styles.arrowTop}`}>
          <SVGArrow />
        </button>
        {concertsData.map((concert) => (
          <Concert
            key={concert.id}
            date={concert.date}
            place={concert.place}
            city={concert.city}
            location={concert.location}
          />
        ))}
        <button className={`${styles.arrow} ${styles.arrowBottom}`}>
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
