import cls from 'classnames';
import React, {FC} from 'react';

import style from './option.module.scss';

interface IRanOptionProps {
  className?: string;
}

const RanOption: FC<IRanOptionProps> = ({className}) => {
  return <div className={cls(className, style.option)}>Option</div>;
};

export default RanOption;
