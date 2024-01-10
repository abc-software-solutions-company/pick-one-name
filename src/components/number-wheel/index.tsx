import cls from 'classnames';
import React, {FC} from 'react';

interface INumberWheelProps {
  className?: string;
}

const NumberWheel: FC<INumberWheelProps> = ({className}) => {
  return <div className={cls(className)}>NumberWheel</div>;
};

export default NumberWheel;
