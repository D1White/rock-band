import React from 'react';

import styles from './About.module.scss';

import Participant from '@components/Participant';

const About = () => {
  const data = [
    {
      img: 'https://images.genius.com/4fb5166827e0eb0f2e6c9c9bf18965fe.1000x1000x1.png',
      name: 'Oleksii Kolotenko',
      instagram: 'oleshaz',
    },
    {
      img: 'https://images.genius.com/4fb5166827e0eb0f2e6c9c9bf18965fe.1000x1000x1.png',
      name: 'Oleksii Kolotenko',
      instagram: 'freakoutofhouse',
    },
    {
      img: 'https://images.genius.com/4fb5166827e0eb0f2e6c9c9bf18965fe.1000x1000x1.png',
      name: 'Oleksii Kolotenko',
      instagram: 'jack1enorton',
    },
    {
      img: 'https://images.genius.com/4fb5166827e0eb0f2e6c9c9bf18965fe.1000x1000x1.png',
      name: 'Oleksii Kolotenko',
      instagram: 'andrey_kartoha',
    },
    {
      img: 'https://images.genius.com/4fb5166827e0eb0f2e6c9c9bf18965fe.1000x1000x1.png',
      name: 'Oleksii Kolotenko',
      instagram: '_vickucha_slts',
    },
  ];

  return (
    <section className={styles.wrapper} id="about">
      <div className={`container ${styles.container}`}>
        <div className={styles.team}>
          {data.map((item) => (
            <Participant
              name={item.name}
              img={item.img}
              instagram={item.instagram}
              key={`${item.name}_${item.instagram}`}
            />
          ))}
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <a
          href="https://www.instagram.com/scyther_band/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          @scyther_band
        </a>
      </div>
    </section>
  );
};

export default About;
