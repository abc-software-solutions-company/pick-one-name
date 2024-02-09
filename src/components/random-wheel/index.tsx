import React, {FC, useEffect} from 'react';

import Players from '@/components/players';

import Wheel from './wheel';

const RandomWheel: FC = () => {
  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  return (
    <div className="inline-flex h-full w-full flex-col justify-between gap-6 lg:flex lg:flex-row lg:gap-8">
      <Wheel className="flex basis-1/2 flex-col items-center gap-4 md:gap-6 md:p-10 lg:basis-2/3 lg:px-21 lg:py-5" />
      <Players className="flex flex-grow basis-1/2 flex-col items-center lg:basis-1/3" />
    </div>
  );
};

export default RandomWheel;
