import React, { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO: FC<SEOProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{`Scyther band - ${title}`}</title>
      <meta name="description" content={description} />
      <meta name={title} content={description} />
      {image && <meta name="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
};

export default SEO;
