import React, {FC, ReactNode} from 'react';
import cls from 'classnames';

export interface IModalFooterProps {
  className?: string;
  children?: ReactNode;
}

const Footer: FC<IModalFooterProps> = ({className, children}) => {
  return <div className={cls('abc-modal-footer', className)}>{children}</div>;
};

export default Footer;
