import React, {FC} from 'react';
import classnames from 'classnames';
import {IPlayer} from '@/localdb/models/player.model';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';

import styles from './modal-congrats.module.scss';

interface ICongratsProps {
  className?: string;
  player: IPlayer;
  open?: boolean;
  onClose?: () => void;
  onHidePlayer?: () => void;
}

const Congrats: FC<ICongratsProps> = ({className, player, open, onClose, onHidePlayer}) => {
  if (!open) return null;

  return (
    <Modal
      variant="center"
      className={classnames(styles.congratulation, 'max-w-lg md:max-w-xl', className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Header text="" />
      <Modal.Body className="relative -mt-12">
        <h2 className="heading">Xin chúc mừng</h2>
        <h1 className="player">{player?.name}</h1>
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
            onClick={onClose}
          />
          <Button
            className="w-full bg-blue-600 text-zinc-50"
            variant="outlined"
            text="ẨN NGƯỜI CHƠI NÀY"
            onClick={onHidePlayer}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
