import cls from 'classnames';
import React, {FC} from 'react';

interface IRanOptionProps {
  className?: string;
}

const RanOption: FC<IRanOptionProps> = ({className}) => {
  return <div className={cls(className)}>Option</div>;
};

export default RanOption;
