import { FC } from 'react';
import Image from 'next/image';
import { IHero } from 'types/contentful';

import { AnimScale } from '@components/animations';

import styles from './HeroSection.module.scss';

import topCurtain from '@img/red-paper_top.png';

interface Props {
  data?: IHero;
}

const HeroSection: FC<Props> = ({ data }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.topСurtain}>
        <Image src={topCurtain} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.logo}>
        <AnimScale waitReloader direction="up">
          <img src={data?.fields.logo.fields.file.url} alt="Scyther band logo" />
        </AnimScale>
      </div>

      <div className={styles.bg}>
        <AnimScale waitReloader>
          <img src={data?.fields.bg.fields.file.url} alt="Scyther band concert" />
        </AnimScale>
      </div>
    </section>
  );
};

export default HeroSection;
