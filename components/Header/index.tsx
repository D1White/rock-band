import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

import ScytherLogo from '@components/ScytherLogo';
import Menu from '@components/Menu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

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
            <a className={styles.logo}>
              <ScytherLogo />
            </a>
          </Link>

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

          <button
            className={`${styles.burgerMenu} ${menuVisible && styles.active}`}
            onClick={toggleMenu}
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
