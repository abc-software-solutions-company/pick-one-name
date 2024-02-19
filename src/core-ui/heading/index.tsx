import React, {FC, memo, ReactNode} from 'react';
import cls from 'classnames';

interface IProps {
  className?: string;
  text?: string;
  children?: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<IProps> = ({className, text, children, as = 'h1'}) => {
  const Element = as;
  const content = text || children;
  return <Element className={cls('abc-heading', className)}>{content}</Element>;
};

Heading.displayName = 'AIHeading';

export default memo(Heading);
