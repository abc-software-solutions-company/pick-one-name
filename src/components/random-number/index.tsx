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
    <div className={'inline-flex h-full w-full flex-col gap-8 lg:flex lg:flex-row'}>
      <VerticalWheel className={'max-h-[206px] w-full md:max-h-full lg:basis-2/3'} />
      <RandomOption className="w-full lg:basis-1/3" min={0} max={0} />
      <CongratsNumber number={randomNumber} open={isDone} onClose={() => setDone(false)} />
    </div>
  );
};

export default RandomNumber;
