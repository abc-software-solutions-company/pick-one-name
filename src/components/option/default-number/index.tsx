import React from 'react';

import {useRandomNumber} from '@/hooks/use-random-number';
import {ranges} from '@/utils/random';

import DefaultNumberButton from './default-number-button';

const DefaultNumberOptions = () => {
  const {setMin, setMax} = useRandomNumber();

  const randomOptions = ranges.map(({min, max, label}) => (
    <DefaultNumberButton
      key={label}
      onClick={() => {
        setMin(min);
        setMax(max);
      }}
      labelLimit={label}
    />
  ));
  return (
    <div className="flex h-full flex-wrap content-start items-start gap-2 self-stretch lg:gap-3">{randomOptions}</div>
  );
};

export default DefaultNumberOptions;
