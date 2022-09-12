import cls from 'classnames';
import React, {FC} from 'react';

import Icon from '../icon';
import {IconSize} from '../types';

interface IProps {
  className?: string;
  name: string;
  size?: IconSize;
  disabled?: boolean;
  onClick?: () => void;
}

const IconButton: FC<IProps> = ({className, name, disabled, size = 24, onClick}) => {
  return (
    <button className={cls('icon-btn', className)} onClick={onClick} disabled={disabled}>
      <Icon name={name} size={size} />
    </button>
  );
};

export default IconButton;
