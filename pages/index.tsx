import type { NextPage, GetServerSideProps } from 'next';

import 'swiper/css';
import 'swiper/css/pagination';

import HeroSection from '@components/HeroSection';
import About from '@components/About';
import Albums from '@components/Albums';
import PaperСurtain from '@components/PaperСurtain';
import Concerts from '@components/Concerts';
import Ticker from '@components/Ticker';
import Gallery from '@components/Gallery';
import Preloader from '@components/Preloader';
import SEO from '@components/SEO';

import { getHero, getAbout, getAlbums, getConcerts, getGallery } from '@utils/api';
import seo from 'constants/seo';
import { IHero, IAbout, IAlbum, IConcert, IGallery } from 'types/contentful';
import { useMemo } from 'react';

interface Props {
  heroData?: IHero;
  about?: IAbout;
  albums?: IAlbum[];
  concerts?: IConcert[];
  gallery?: IGallery;
}

const Home: NextPage<Props> = ({ heroData, about, albums, concerts, gallery }) => {

  const filterConcerts = useMemo(() => {
    if (!concerts) return [];
    const date = new Date();

    const result = concerts
      .filter((concert) => {
        const concertDate = new Date(concert.fields.date);
        return +date <= +concertDate;
      })
      .sort((a, b) => {
        return +new Date(a.fields.date) - +new Date(b.fields.date);
      });

    return result;
  }, [concerts]);

  return (
    <>
      <SEO
        title={seo.main.title}
        description={seo.main.description}
        keywords={seo.main.keywords}
        ogTitle={seo.main.ogTitle}
        ogDescription={seo.main.ogDescription}
        image={heroData?.fields.bg.fields.file.url}
        ogImage={heroData?.fields.bg.fields.file.url}
      />
      <Preloader />
      <main>
        <HeroSection data={heroData} />

        {about && (
          <>
            <PaperСurtain key={1} />
            <About data={about} />
          </>
        )}

        {albums && (
          <>
            <Albums albums={albums} />
            <PaperСurtain key={2} />
          </>
        )}

        {filterConcerts?.length > 0 && (
          <Concerts concerts={filterConcerts} />
        )}
        <Ticker />

        {gallery && <Gallery data={gallery} />}
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const heroData = await getHero();
  const about = await getAbout();
  const albums = await getAlbums();
  const concerts = await getConcerts();
  const gallery = await getGallery();

  return {
    props: { heroData, about, albums, concerts, gallery },
  };
};
