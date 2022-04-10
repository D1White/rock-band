import React from 'react';
import Image from 'next/image';

import styles from './Footer.module.scss';

import scytherLogo from '@img/scyther-logo.png';
import SVG1WhiteLogo from '@svg/1white_logo.svg';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <hr className={styles.line} />
      <div className={styles.integration}>
        <div className={styles.scytherLogo}>
          <Image src={scytherLogo} alt="Scyther band logo" />
        </div>
        <span className={styles.delimiter}>x</span>
        <SVG1WhiteLogo className={styles.whiteLogo} />
      </div>
      <p className={styles.text}>
        Developed by{' '}
        <a href="https://1white.netlify.app/" target="_blank" rel="noopener noreferrer">
          Danylo Bilyi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
