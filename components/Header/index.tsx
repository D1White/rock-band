import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './Header.module.scss';

import Logo from 'assets/svg/logo.svg';
import RedPaper from 'assets/img/red-paper_bottom.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { title: 'about us', href: '#about' },
    { title: 'music', href: '#music' },
    { title: 'concerts', href: '#concerts' },
    { title: 'gallery', href: '#gallery' },
  ];

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

  return (
    <header className={`${styles.header} ${scrolled ? styles.scroll : ''}`}>
      <div className={`container ${styles.container}`}>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.title}>
                <a href={link.href} className={styles.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
