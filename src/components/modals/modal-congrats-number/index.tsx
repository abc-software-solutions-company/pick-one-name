import cls from 'classnames';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './modal-congrats.module.scss';

interface IProps {
  className?: string;
  number: number;
  open?: boolean;
  onClose?: () => void;
}

const CongratsNumber: FC<IProps> = ({className, number, open, onClose}) => {
  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={cls('h-full max-w-xs md:max-w-2xl', styles.congratulation, className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Body className="relative z-[3] -mt-12">
        <div className="flex flex-col items-center justify-center gap-8 md:py-25">
          <div className="text-[64px] font-bold leading-[68px] tracking-wide text-blue-600">{number}</div>
          <div className="text-5xl font-normal leading-[48px] text-gray-700">Số may mắn</div>
          <Button
            className="relative z-[5] bg-blue-600 text-lg font-semibold leading-normal text-neutral-50 md:max-w-[150px] md:px-12 md:py-4"
            color="primary"
            text="Xong"
            onClick={onClose}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 z-[4] w-[120%] -translate-x-1/2 -translate-y-1/2">
          <lottie-player src={'/congrats.json'} background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CongratsNumber;
