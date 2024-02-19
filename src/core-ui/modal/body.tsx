import React, {FC, ReactNode} from 'react';
import cls from 'classnames';

export interface IModalBodyProps {
  className?: string;
  children: ReactNode;
}

const Body: FC<IModalBodyProps> = ({className, children}) => {
  return <div className={cls('abc-modal-body', 'scrollbar', className)}>{children}</div>;
};

export default Body;
