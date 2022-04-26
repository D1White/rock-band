import React, { FC } from 'react';
import Head from 'next/head';

export interface SEOProps {
  title?: string;
  description: string;
  image?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  image,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  return (
    <Head>
      <title>{title ? `Scyther band | ${title}` : 'Scyther band'}</title>
      <meta name={title} content={description} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta name="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={ogTitle || 'Scyther band'} />
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      <link
        href="https://fonts.googleapis.com/css2?family=Grenze:wght@400;500;700&family=Montserrat:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
};

export default SEO;
