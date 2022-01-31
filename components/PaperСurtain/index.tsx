import React from 'react';
import Image from 'next/image';

import styles from './PaperСurtain.module.scss';

import redPaper from 'assets/img/red-paper.png';

const PaperСurtain = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={redPaper} alt="red paper curtain" layout="fill" />
    </div>
  );
};

export default PaperСurtain;
