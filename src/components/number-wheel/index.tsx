import cls from 'classnames';
import React, {FC} from 'react';

import style from './number.module.scss';

interface INumberWheelProps {
  className?: string;
}

const NumberWheel: FC<INumberWheelProps> = ({className}) => {
  return <div className={cls(className, style['number-wheel'])}>NumberWheel</div>;
};

export default NumberWheel;
