import client from '@utils/contentfulConfig';
import { IQuery } from 'types/contentful/query';
import {
  IAboutFields,
  IAlbumFields,
  IConcertFields,
  IGalleryFields,
  IHeroFields,
} from 'types/contentful';

export const getHero = async () => {
  const query: IQuery = {
    content_type: 'hero',
    limit: 1,
  };

  try {
    const res = await client.getEntries<IHeroFields>(query);

    return res?.items[0] || undefined;
  } catch (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }
};

export const getAbout = async () => {
  const query: IQuery = {
    content_type: 'about',
    limit: 1,
  };

  try {
    const res = await client.getEntries<IAboutFields>(query);

    return res?.items[0] || undefined;
  } catch (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }
};

export const getAlbums = async () => {
  const query: IQuery = { content_type: 'album' };

  try {
    const res = await client.getEntries<IAlbumFields>(query);

    return res?.items;
  } catch (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }
};

export const getConcerts = async () => {
  const query: IQuery = { content_type: 'concert' };

  try {
    const res = await client.getEntries<IConcertFields>(query);

    return res?.items;
  } catch (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }
};

export const getGallery = async () => {
  const query: IQuery = { content_type: 'gallery' };

  try {
    const res = await client.getEntries<IGalleryFields>(query);

    return res?.items[0] || undefined;
  } catch (error) {
    console.error(JSON.stringify(error));

    return undefined;
  }
};
