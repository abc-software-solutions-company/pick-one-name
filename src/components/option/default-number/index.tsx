import React from 'react';
import {ranges} from '@/utils/random';

import {useRandomNumber} from '@/common/hooks/use-random-number';

import DefaultNumberButton from './default-number-button';

const DefaultNumberOptions: React.FC = () => {
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
