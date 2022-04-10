import type { NextPage } from 'next';

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

const Home: NextPage = () => {
  return (
    <>
      <Preloader />
      <main>
        <HeroSection />
        <PaperСurtain key={1} />
        <About />
        <Albums />
        <PaperСurtain key={2} />
        <Concerts />
        <Ticker />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
