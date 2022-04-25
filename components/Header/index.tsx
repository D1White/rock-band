import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power1 } from 'gsap';

import styles from './Header.module.scss';

import ScytherLogo from '@components/ScytherLogo';
import Menu from '@components/Menu';

import { useLoaderPlayed } from 'hooks';

const links = [
  { title: 'about us', href: '#about' },
  { title: 'music', href: '#music' },
  { title: 'concerts', href: '#concerts' },
  { title: 'gallery', href: '#gallery' },
];

const Header = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const loaderPlayed = useLoaderPlayed();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    const tlDelay = loaderPlayed ? 1 : 4;
    const navChildren = navRef?.current?.children || [];

    tl.fromTo(
      logoRef.current,
      {
        xPercent: -300,
      },
      {
        xPercent: 0,
        duration: 0.8,
        delay: tlDelay,
        ease: Power1.easeOut,
      },
    ).fromTo(
      navChildren,
      {
        yPercent: -200,
      },
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.1,
        ease: Power1.easeOut,
      },
      '-=0.4',
    );

    return () => {
      tl.kill();
    };
  }, [loaderPlayed]);

  const toggleMenu = () => {
    document.body.classList.toggle('no-scroll');
    setMenuVisible((value) => !value);
    if (!menuVisible) {
      setScrolled(false);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scroll : ''}`}>
        <div className={`container ${styles.container}`}>
          <Link href="/">
            <a className={styles.logo} ref={logoRef} aria-label="Scyther">
              <ScytherLogo />
            </a>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList} ref={navRef}>
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className={styles.link}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`${styles.burgerMenu} ${menuVisible && styles.active}`}
            onClick={toggleMenu}
            aria-label="burger menu toggle"
          >
            <div></div>
            <div></div>
          </button>
        </div>
      </header>

      <Menu visible={menuVisible} links={links} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
