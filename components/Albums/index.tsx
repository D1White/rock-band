import { FC, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import styles from './Albums.module.scss';

import Album from '@components/Album';
import { useOnScreen } from 'hooks';

import blackPaper from '@img/black-paper.jpg';
import SVGArrowSwipe from '@svg/arrow-swipe.svg';

import { IAlbum } from 'types/contentful';

interface Props {
  albums: IAlbum[];
}

const AlbumsSection: FC<Props> = ({ albums }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, true, 800);

  return (
    <section className={styles.wrapper} id="music">
      {albums.length > 1 && (
        <div className={styles.swipe}>
          <span className={styles.swipeText}>swipe</span>
          <SVGArrowSwipe className={styles.swipeArrow} />
        </div>
      )}

      <div className={cn('container', styles.container)} ref={ref}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          slideToClickedSlide={true}
          grabCursor={true}
          speed={800}
          breakpoints={{
            770: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {albums.map((album) => (
            <SwiperSlide key={album.sys.id}>
              <Album
                cover={album.fields.cover.fields.file.url}
                name={album.fields.name}
                link={album.fields.link}
                year={album.fields.year}
                animate={isVisible}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.bg}>
        <Image src={blackPaper} layout="fill" alt="black paper" />
      </div>
    </section>
  );
};

export default AlbumsSection;
