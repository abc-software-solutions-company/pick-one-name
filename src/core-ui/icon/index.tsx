import React, {FC} from 'react';
import cls from 'classnames';

import {IconSize} from '../types';

interface IProps {
  className?: string;
  name: string;
  size?: IconSize;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Icon: FC<IProps> = ({className, name, size = 24, onClick, style}) => {
  return <i className={cls('abc-icon', className, name, `size-${size}`)} onClick={onClick} style={style}></i>;
};

export default Icon;
