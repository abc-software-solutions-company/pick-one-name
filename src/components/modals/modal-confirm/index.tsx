import React, {FC} from 'react';
import cls from 'classnames';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './modal-confirm.module.scss';

interface IProps {
  className?: string;
  message?: string;
  open?: boolean;
  headerText?: string;
  buttonLeftText?: string;
  buttonRightText?: string;
  onYes?: () => void;
  onNo?: () => void;
}

const ConfirmBox: FC<IProps> = ({
  className,
  message,
  open,
  headerText = 'Xác nhận',
  buttonLeftText = 'Xác nhận',
  buttonRightText = 'Hủy',
  onYes,
  onNo
}) => {
  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={cls(styles['confirm-box'], 'max-w-lg md:max-w-xl', className)}
      open={open}
      onClose={onNo!}
    >
      <Modal.Header text={headerText} />
      <Modal.Body>
        <p className="text-center">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons horizontal">
          <Button className="w-full bg-blue-600" variant="outlined" text={buttonLeftText} onClick={onYes} />
          <Button className="w-full bg-blue-600" variant="outlined" text={buttonRightText} onClick={onNo} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmBox;
