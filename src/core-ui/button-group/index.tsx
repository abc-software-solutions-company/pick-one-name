import cls from 'classnames';
import React, {FC, ReactNode} from 'react';

interface IButtonGroupProps {
  className?: string;
  children?: ReactNode;
}

const ButtonGroup: FC<IButtonGroupProps> = ({className, children, ...rest}) => {
  return (
    <div className={cls('abc-button-group', className)} {...rest}>
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'AIButtonGroup';

export default ButtonGroup;
