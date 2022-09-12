import cls from 'classnames';
import React, {FC, ReactNode} from 'react';

import Icon from '../icon';
import {useModal} from './modal';

export interface IModalHeaderProps {
  className?: string;
  text?: string;
  children?: ReactNode;
}

const Header: FC<IModalHeaderProps> = ({className, text, children}) => {
  const {onClose} = useModal();

  const content = text ? <p className={cls('abc-modal-title', className)}>{text}</p> : children;

  return (
    <div className={cls('abc-modal-header', className)}>
      {content}
      <Icon className="abc-modal-close ml-auto cursor-pointer" name="ico-x-circle" onClick={() => onClose(false)} />
    </div>
  );
};

export default Header;
