import React, {FC} from 'react';
import classnames from 'classnames';
import {IPlayer} from '@/localdb/models/player.model';

import Button from '@/core-ui/button';
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
  const {textColor, bgColor} = useSetting();

  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={classnames(styles.congratulation, 'max-w-lg md:max-w-xl', className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Header text="" />
      <Modal.Body className="relative -mt-12 flex w-full flex-col items-center">
        <h3 className="text-2xl font-bold text-blue-300 md:text-[40px] lg:text-5xl" style={{color: textColor}}>
          Chúc mừng bạn
        </h3>
        <h3
          className="my-2 text-3xl font-bold tracking-wide text-zinc-900 md:my-8 md:text-[40px] lg:text-5xl"
          style={{color: textColor}}
        >
          {player?.name}
        </h3>
        <div className="animation">
          <lottie-player src={'/congrats.json'} background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons horizontal">
          <Button
            className="bg-blue-600 px-5 text-zinc-50 sm:w-full md:px-3"
            variant="outlined"
            text="ĐÓNG"
            style={{
              backgroundColor: bgColor,
              color: textColor
            }}
            onClick={onClose}
          />
          <Button
            className="w-full bg-blue-600 text-zinc-50"
            variant="outlined"
            text="ẨN NGƯỜI CHƠI NÀY"
            style={{
              backgroundColor: bgColor,
              color: textColor
            }}
            onClick={onHidePlayer}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
