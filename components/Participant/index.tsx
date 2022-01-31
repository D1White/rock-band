import { FC } from 'react';

import styles from './Participant.module.scss';

interface ParticipantProps {
  img: string;
  name: string;
  instagram: string;
}

const Participant: FC<ParticipantProps> = ({ img, name, instagram }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={name} className={styles.img} />
      <h4 className={styles.name}>{name}</h4>
      <a
        href={`https://www.instagram.com/${instagram}/`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {`@${instagram}`}
      </a>
    </div>
  );
};

export default Participant;
