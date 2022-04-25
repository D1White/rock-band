import { FC } from 'react';
import { AnimScale, AnimOpacity } from '@components/animations';

import styles from './Participant.module.scss';

interface ParticipantProps {
  img: string;
  name: string;
  instagram: string;
}

const Participant: FC<ParticipantProps> = ({ img, name, instagram }) => {
  const instagramLink = instagram.replace('@', '');

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <AnimScale delay={0.3} duration={0.8} power={2}>
          <img src={img} alt={name} className={styles.img} />
        </AnimScale>
      </div>

      <AnimOpacity className={styles.name__wrapper} delay={0.5} duration={0.8} direction="down">
        <h4 className={styles.name}>{name}</h4>
      </AnimOpacity>

      <AnimOpacity className={styles.link__wrapper} delay={0.9} duration={0.8} direction="down">
        <a
          href={`https://www.instagram.com/${instagramLink}/`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {instagram}
        </a>
      </AnimOpacity>
    </div>
  );
};

export default Participant;
