import React, { FC } from 'react';

import styles from './About.module.scss';

import Participant from '@components/Participant';
import { AnimOpacity } from '@components/animations';

import { IAbout } from 'types/contentful';

interface Props {
  data: IAbout;
}

const About: FC<Props> = ({ data }) => {
  const instagramLink = data.fields.instagram.replace('@', '');

  return (
    <section className={styles.wrapper} id="about">
      <div className={`container ${styles.container}`}>
        <div className={styles.team}>
          {data.fields.participant.map((item) => (
            <Participant
              name={item.fields.name}
              img={item.fields.photo.fields.file.url}
              instagram={item.fields.instagram}
              key={item.sys.id}
            />
          ))}
        </div>
        <AnimOpacity delay={1.2}>
          <p className={styles.text}>{data.fields.about}</p>
        </AnimOpacity>
        <a
          href={`https://www.instagram.com/${instagramLink}/`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {data.fields.instagram}
        </a>
      </div>
    </section>
  );
};

export default About;
