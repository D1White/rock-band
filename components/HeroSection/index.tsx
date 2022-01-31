import React from 'react';
import Image from 'next/image';

import styles from './HeroSection.module.scss';

import topCurtain from 'assets/img/red-paper_top.png';
import bottomCurtain from 'assets/img/red-paper_bottom.png';
import heroPhoto from 'assets/img/hero-img.jpg';
import scyterLogo from 'assets/img/scyther-logo.png';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.topСurtain}>
        <Image src={topCurtain} layout="fill" />
      </div>

      <div className={styles.logo}>
        <Image src={scyterLogo} layout="fill" alt="Scyter" />
      </div>

      <div className={styles.bg}>
        <Image src={heroPhoto} layout="fill" alt="Scyter band concert" />
      </div>

      {/* <div className={styles.bottomСurtain}>
        <Image src={bottomCurtain} layout="fill" />
      </div> */}
    </section>
  );
};

export default HeroSection;
