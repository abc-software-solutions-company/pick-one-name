import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';

import GtagScript from './gtag';
import SegmentScript from './segment';
import Tracker from './utils/tracker';

const Tracking: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const pageTracking = () => {
      Tracker.page(window.location.pathname);
    };

    router.events.on('routeChangeComplete', pageTracking);

    return () => {
      router.events.off('routeChangeComplete', pageTracking);
    };
  }, [router.events]);

  return (
    <>
      <GtagScript />
      <SegmentScript />
    </>
  );
};

export default Tracking;
