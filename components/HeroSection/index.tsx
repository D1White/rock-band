import React from 'react';
import Image from 'next/image';

import styles from './HeroSection.module.scss';

import topCurtain from '@img/red-paper_top.png';
import heroPhoto from '@img/hero-img.jpg';
import scyterLogo from '@img/scyther-logo.png';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.topСurtain}>
        <Image src={topCurtain} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.logo}>
        <Image src={scyterLogo} layout="fill" alt="Scyter" />
      </div>

      <div className={styles.bg}>
        <Image src={heroPhoto} layout="fill" objectFit="cover" alt="Scyter band concert" />
      </div>
    </section>
  );
};

export default HeroSection;
