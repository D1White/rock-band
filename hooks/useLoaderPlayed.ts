import { useEffect, useState } from 'react';

export const useLoaderPlayed = () => {
  const [loaderPlayed, setLoaderPlayed] = useState(false);

  useEffect(() => {
    const loaderPlayedStorage = sessionStorage.getItem('loaderPlayed');

    if (loaderPlayedStorage === 'true') {
      setLoaderPlayed(true);
    }
  }, []);

  return loaderPlayed;
};
