import cls from 'classnames';
import React, {FC} from 'react';

interface IProps {
  className?: string;
  open: boolean;
  onClick?: () => void;
}

const Backdrop: FC<IProps> = ({className, open, onClick}) => {
  return <div className={cls('abc-backdrop', open && 'show', className)} onClick={onClick}></div>;
};

export default Backdrop;
