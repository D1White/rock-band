import { SEOProps } from '@components/SEO';

interface ISEO {
  [key: string]: SEOProps;
}

const SEO: ISEO = {
  main: {
    title: 'Home',
    description: 'Scyther band website',
    keywords: 'Scyther, scyther band, band, metal band, rock band, music, music band, scyter',
    ogTitle: 'Scyther band',
    ogDescription: 'Scyther band website',
  },
};

export default SEO;
