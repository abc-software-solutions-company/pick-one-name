import {useEffect} from 'react';
import {useRouter} from 'next/router';

import Tracker from './utils/tracker';
import GtagScript from './gtag';
import SegmentScript from './segment';

const Tracking = () => {
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
