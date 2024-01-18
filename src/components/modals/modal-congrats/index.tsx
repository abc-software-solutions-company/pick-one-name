import classnames from 'classnames';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';
import {IPlayer} from '@/localdb/models/player.model';

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
      className={classnames(styles.congratulation, 'max-w-xl', className)}
      open={open}
      onClose={onClose!}
    >
      <Modal.Header text="" />
      <Modal.Body className="relative -mt-12">
        <h2 className="heading">Congratulations</h2>
        <h1 className="player">{player?.name}</h1>
        <div className="animation">
          <lottie-player src={'/congrats.json'} background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons horizontal">
          <Button
            className="px-5 sm:w-full md:px-3"
            variant="outlined"
            color="primary"
            text="CLOSE"
            onClick={onClose}
          />
          <Button
            className="w-full"
            variant="outlined"
            color="primary"
            text="HIDE THIS PLAYER"
            onClick={onHidePlayer}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
