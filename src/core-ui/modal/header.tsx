import cls from 'classnames';
import React, {FC, ReactNode} from 'react';

import Icon from '../icon';
import {useModal} from './modal';

export interface IModalHeaderProps {
  className?: string;
  text?: string;
  icon?: string;
  children?: ReactNode;
}

const Header: FC<IModalHeaderProps> = ({className, text, icon = 'ico-x-circle', children}) => {
  const {onClose} = useModal();

  const content = text ? <p className={cls('abc-modal-title', className)}>{text}</p> : children;

  return (
    <div className={cls('abc-modal-header', className)}>
      {content}
      <Icon className="abc-modal-close ml-auto cursor-pointer px-4" name={icon} onClick={() => onClose(false)} />
    </div>
  );
};

export default Header;
