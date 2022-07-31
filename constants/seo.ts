import { SEOProps } from '@components/SEO';

interface ISEO {
  [key: string]: SEOProps;
}

const SEO: ISEO = {
  main: {
    title: 'Home',
    description: 'Syther band website',
    keywords: 'Syther, syther band, band, metal band, rock band, music, music band, scyter',
    ogTitle: 'Syther band',
    ogDescription: 'Syther band website',
  },
};

export default SEO;
