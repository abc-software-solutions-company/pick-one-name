import React, {FC, memo, ReactNode} from 'react';
import cls from 'classnames';

import Backdrop from '../backdrop';
import Icon from '../icon';
import Portal from '../portal';

interface IProps {
  className?: string;
  title?: string;
  children?: ReactNode;
  open: boolean;
  iconCloseVisible?: boolean;
  anchor?: 'top' | 'right' | 'bottom' | 'left';
  backdrop?: boolean;
  onClose?: (value: boolean) => void;
}

const Drawer: FC<IProps> = ({
  className,
  backdrop = false,
  open = false,
  anchor = 'left',
  title = '',
  iconCloseVisible = false,
  children,
  onClose
}) => {
  return (
    <Portal>
      <div className={cls('drawer-container', anchor, open && 'show', className)}>
        <Backdrop open={backdrop && open} onClick={() => onClose?.(backdrop ? true : false)} />
        <div className="drawer-content">
          <div className="drawer-header">
            <h5>{title}</h5>
            {iconCloseVisible && (
              <button onClick={() => onClose?.(false)}>
                <Icon name="ico-x-circle" />
              </button>
            )}
          </div>
          <div className="drawer-body">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

Drawer.displayName = 'AIDrawer';

export default memo(Drawer);
