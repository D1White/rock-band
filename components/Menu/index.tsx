import { FC, useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

import styles from './Menu.module.scss';

import bg from '@img/menu-bg.png';

interface MenuProps {
  visible: boolean;
  links: Array<{ title: string; href: string }>;
  toggleMenu: () => void;
}

const Menu: FC<MenuProps> = ({ visible, links, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tl = useRef(gsap.timeline({ defaults: { ease: 'power1.inOut' } }).reverse());

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a');

    tl.current
      .fromTo(
        menuRef.current,
        {
          backdropFilter: 'blur(0px)',
        },
        {
          backdropFilter: 'blur(10px)',
        },
        0,
      )
      .fromTo(
        bgRef.current,
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
        },
        0,
      );

    if (links) {
      tl.current.fromTo(
        links,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          stagger: 0.2,
        },
      );
    }

    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    tl.current.timeScale(visible ? 1 : 2).reversed(!visible);
  }, [visible]);

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <nav className={styles.nav} ref={navRef}>
        {links.map((link) => (
          <div key={link.title} className={styles.linkWrapper}>
            <a href={link.href} onClick={toggleMenu} className={styles.link}>
              {link.title}
            </a>
          </div>
        ))}
      </nav>

      <div className={styles.bg} ref={bgRef}>
        <Image src={bg} layout="fill" objectFit="fill" />
      </div>
    </div>
  );
};

export default memo(Menu);
