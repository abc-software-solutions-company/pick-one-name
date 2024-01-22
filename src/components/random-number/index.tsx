import React, {FC, useEffect} from 'react';

import {useRandomNumber} from '@/hooks/use-random-number';

import CongratsNumber from '../modals/modal-congrats-number';
import VerticalWheel from '../number-wheel';
import RandomOption from '../option';

const RandomNumber: FC = () => {
  const {randomNumber, isDone, setDone} = useRandomNumber();
  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  return (
    <div className={'flex h-full items-stretch gap-8'}>
      <VerticalWheel className={'lg:basis-2/3 xs:w-full'} />
      <RandomOption className="lg:basis-1/3 xs:w-full" min={0} max={0} />
      <CongratsNumber number={randomNumber} open={isDone} onClose={() => setDone(false)} />
    </div>
  );
};

export default RandomNumber;
