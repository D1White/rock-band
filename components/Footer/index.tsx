import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './Footer.module.scss';

import { AnimScale } from '@components/animations';

import scytherLogo from '@img/scyther-logo.png';
import SVG1WhiteLogo from '@svg/1white_logo.svg';

gsap.registerPlugin(scrollTrigger);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const integrationChild = integrationRef?.current?.children || [];
    const textChild = textRef?.current?.children || [];

    const tl = gsap.timeline({
      scrollTrigger: containerRef.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      lineRef.current,
      {
        width: 0,
      },
      {
        width: '100%',
        delay: 0.3,
        duration: 1,
        ease: Power1.easeOut,
      },
      0,
    )
      .fromTo(
        integrationChild,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: Power1.easeOut,
        },
        '-=0.2',
      )
      .fromTo(
        textChild,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: Power1.easeOut,
        },
        '-=0.4',
      );

    return () => {
      tl?.kill();
    };
  }, []);

  return (
    <footer className={styles.wrapper} ref={containerRef}>
      <hr className={styles.line} ref={lineRef} />

      <div className={styles.integration} ref={integrationRef}>
        <div className={styles.scytherLogo}>
          <Image src={scytherLogo} alt="Scyther band logo" />
        </div>

        <span className={styles.delimiter}>x</span>

        <SVG1WhiteLogo className={styles.whiteLogo} />
      </div>

      <div className={styles.text__wrapper} ref={textRef}>
        <p className={styles.text}>
          Developed by{' '}
          <a href="https://danylo-bilyi.site/" target="_blank" rel="noopener noreferrer">
            Danylo Bilyi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
