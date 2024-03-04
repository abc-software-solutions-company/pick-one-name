import React, {FC} from 'react';
import classnames from 'classnames';
import {IPlayer} from '@/localdb/models/player.model';

import {Modal} from '@/core-ui/modal';

import {useSetting} from '@/common/hooks/use-setting';

import styles from './modal-congrats.module.scss';

interface ICongratsProps {
  className?: string;
  player: IPlayer;
  open?: boolean;
  onClose?: () => void;
  onHidePlayer?: () => void;
}

const Congrats: FC<ICongratsProps> = ({className, player, open, onClose, onHidePlayer}) => {
  const {textColor} = useSetting();

  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={classnames(styles.congratulation, 'max-w-xl lg:max-w-2xl', className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Header text="" />
      <Modal.Body className="relative -mt-12 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-blue-300 md:text-[40px] lg:text-5xl" style={{color: textColor}}>
          Chúc mừng bạn
        </h3>
        <h3
          className="text-center text-5xl font-bold tracking-wide text-zinc-900 md:text-6xl lg:text-7xl"
          style={{color: textColor}}
        >
          {player?.name}
        </h3>
        <div className="animation">
          <lottie-player src={'/congrats.json'} background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex w-full items-center justify-center">
          <button
            className="z-20 w-full max-w-1/2 rounded-lg border-2 bg-transparent py-2
            text-sm font-semibold md:max-w-xs md:px-14 md:py-4 md:text-lg"
            style={{
              color: textColor,
              borderColor: textColor
            }}
            onClick={onHidePlayer}
          >
            Ẩn người chơi này
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
