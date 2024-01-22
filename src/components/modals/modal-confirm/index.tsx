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
    <Modal variant="center" className={cls(styles['confirm-box'], 'max-w-xs', className)} open={open} onClose={onNo!}>
      <Modal.Header text="Confirm" />
      <Modal.Body>
        <p className="text-center">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons horizontal">
          <Button className="w-full" variant="outlined" color="primary" text="OK" onClick={onYes} />
          <Button className="w-full" variant="outlined" color="primary" text="CANCEL" onClick={onNo} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmBox;
