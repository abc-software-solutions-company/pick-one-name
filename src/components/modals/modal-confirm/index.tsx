import cls from 'classnames';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './modal-confirm.module.scss';

interface IProps {
  className?: string;
  message?: string;
  open?: boolean;
  onYes?: () => void;
  onNo?: () => void;
}

const ConfirmBox: FC<IProps> = ({className, message, open, onYes, onNo}) => {
  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={cls(styles['confirm-box'], 'max-w-lg md:max-w-xl', className)}
      open={open}
      onClose={onNo!}
    >
      <Modal.Header text="Xác nhận" />
      <Modal.Body>
        <p className="text-center">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons horizontal">
          <Button className="w-full bg-blue-600" variant="outlined" text="Xác nhận" onClick={onYes} />
          <Button className="w-full bg-blue-600" variant="outlined" text="Hủy" onClick={onNo} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmBox;
