import React, {FC} from 'react';

import VerticalWheel from '../number-wheel';
import RanOption from '../option';

const RandomNumber: FC = () => {
  return (
    <div className={'flex items-center gap-8'}>
      <VerticalWheel className={'basis-2/3'} />
      <RanOption className="basis-1/3" />
    </div>
  );
};

export default RandomNumber;
