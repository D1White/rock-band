import React from 'react';
import Image from 'next/image';

import styles from './HeroSection.module.scss';

import topCurtain from '@img/red-paper_top.png';
import heroPhoto from '@img/hero-img.jpg';
import scytherLogo from '@img/scyther-logo.png';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.topСurtain}>
        <Image src={topCurtain} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.logo}>
        <Image src={scytherLogo} layout="fill" alt="Scyther" />
      </div>

      <div className={styles.bg}>
        <Image src={heroPhoto} layout="fill" objectFit="cover" alt="Scyther band concert" />
      </div>
    </section>
  );
};

export default HeroSection;
