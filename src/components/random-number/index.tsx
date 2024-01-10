import React, {FC} from 'react';

import VerticalWheel from '../number-wheel';
import RanOption from '../option';
import style from './random-number.module.scss';

const RandomNumber: FC = () => {
  return (
    <div className={style['random-number']}>
      <VerticalWheel className={'basis-2/3 bg-slate-400'} />
      <RanOption className="basis-1/3 bg-slate-300" />
    </div>
  );
};

export default RandomNumber;
