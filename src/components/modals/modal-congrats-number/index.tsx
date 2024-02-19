import React, {FC} from 'react';
import classnames from 'classnames';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './modal-congrats.module.scss';

interface ICongratsNumberProps {
  className?: string;
  number: number;
  open?: boolean;
  onClose?: () => void;
}

const CongratsNumber: FC<ICongratsNumberProps> = ({className, number, open, onClose}) => {
  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={classnames(styles.congratulation, 'max-w-xl lg:max-w-2xl', className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Body className="relative flex flex-col items-center justify-center gap-5 md:gap-8">
        <h3 className="text-2xl font-bold text-blue-300 md:text-[40px] lg:text-5xl">Chúc mừng bạn</h3>
        <h3 className="text-3xl font-bold tracking-wide text-zinc-900 md:text-[40px] lg:text-5xl">{number}</h3>
        <Button
          className="relative z-20 w-full max-w-1/2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-neutral-50 
          md:max-w-xs md:px-14 md:py-4 md:text-lg"
          color="primary"
          text="Xong"
          onClick={onClose}
        />
        <div className="animation">
          <lottie-player src={'/congrats.json'} background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CongratsNumber;
