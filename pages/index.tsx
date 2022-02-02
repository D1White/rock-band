import type { NextPage } from 'next';

import 'swiper/css';

import HeroSection from 'components/HeroSection';
import About from 'components/About';
import Albums from 'components/Albums';
import PaperСurtain from 'components/PaperСurtain';
import Concerts from 'components/Concerts';
import Ticker from 'components/Ticker';
import Gallery from 'components/Gallery';

const Home: NextPage = () => {
  return (
    <main>
      <HeroSection />
      <PaperСurtain />
      <About />
      <Albums />
      <PaperСurtain />
      <Concerts />
      <Ticker />
      <Gallery />
    </main>
  );
};

export default Home;
