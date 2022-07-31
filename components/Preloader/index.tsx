import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import styles from './Preloader.module.scss';

const Preloader = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const sText = useRef<HTMLSpanElement>(null);
  const yText = useRef<HTMLSpanElement>(null);
  const tText = useRef<HTMLSpanElement>(null);
  const hText = useRef<HTMLSpanElement>(null);
  const eText = useRef<HTMLSpanElement>(null);
  const rText = useRef<HTMLSpanElement>(null);
  const redText = useRef<HTMLParagraphElement>(null);
  const whiteText = useRef<HTMLParagraphElement>(null);
  const tl = useRef(gsap.timeline());

  const [playLoader, setPlayLoader] = useState(false);

  useEffect(() => {
    const loaderPlayed = sessionStorage.getItem('loaderPlayed');
    if (loaderPlayed !== 'true') {
      setPlayLoader(true);
    }

    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    if (playLoader) {
      tl.current
        .to(sText.current, { opacity: 1, duration: 0 }, 0.5)
        .to(sText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(yText.current, { opacity: 1, duration: 0 })
        .to(yText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(tText.current, { opacity: 1, duration: 0 })
        .to(tText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(hText.current, { opacity: 1, duration: 0 })
        .to(hText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(eText.current, { opacity: 1, duration: 0 })
        .to(eText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(rText.current, { opacity: 1, duration: 0 })
        .to(rText.current, { opacity: 0, duration: 0 }, '+=0.25')
        .to(wrapper.current, { backgroundColor: '#FF0000', duration: 0.1 }, '+=0')
        .to(redText.current, { opacity: 1, duration: 0 }, '<')
        .to(redText.current, { transform: 'scale(1)', duration: 0.5 }, '+=0')
        .to(whiteText.current, { transform: 'translateY(0)', duration: 0.8 }, '<+=0.2')
        .to(
          wrapper.current,
          { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', duration: 0.5 },
          '+=0',
        )
        .to(
          bg.current,
          { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', duration: 0.5 },
          '+=0',
        );
      tl.current.eventCallback('onComplete', () => {
        sessionStorage.setItem('loaderPlayed', 'true');
        setPlayLoader(false);
      });
    }
  }, [playLoader]);

  return playLoader ? (
    <div className={styles.wrapper}>
      <div className={styles.bg} ref={wrapper}>
        <span className={`${styles.text} ${styles.s}`} ref={sText}>
          s
        </span>
        <span className={`${styles.text} ${styles.y}`} ref={yText}>
          y
        </span>
        <span className={`${styles.text} ${styles.t}`} ref={tText}>
          t
        </span>
        <span className={`${styles.text} ${styles.h}`} ref={hText}>
          h
        </span>
        <span className={`${styles.text} ${styles.e}`} ref={eText}>
          e
        </span>
        <span className={`${styles.text} ${styles.r}`} ref={rText}>
          r
        </span>

        <div className={styles.finalText}>
          <div>
            <p className={styles.finalTextRed} ref={redText}>
              Syther
            </p>
          </div>
          <div className={styles.textMask}>
            <p className={styles.finalTextWhite} ref={whiteText}>
              band
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.bg} ${styles.bg__back}`} ref={bg} />
    </div>
  ) : (
    <></>
  );
};

export default Preloader;
