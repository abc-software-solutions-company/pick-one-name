import React, {ChangeEventHandler, FC} from 'react';
import classNames from 'classnames';
import {IPlayer} from '@/localdb/models/player.model';

import IconButton from '@/core-ui/icon-button';
import Input from '@/core-ui/input';

import styles from './style.module.scss';

interface IPlayerItemProps {
  className?: string;
  player: IPlayer;
  disabled?: boolean;
  onHide: () => void;
  onShow: () => void;
  onDelete: () => void;
  onTextChange: ChangeEventHandler<HTMLInputElement>;
}

const PlayerItem: FC<IPlayerItemProps> = ({player, disabled = false, onHide, onShow, onDelete, onTextChange}) => {
  return (
    <div className={classNames(styles['players__player-item'], styles[!player.visible ? 'disabled' : ''])}>
      <Input className={'flex-grow'} value={player.name} readOnly={disabled} onChange={onTextChange} />
      {!player.visible && <IconButton name="ico-eye" onClick={onShow} disabled={disabled} />}
      {player.visible && <IconButton name="ico-eye-off" onClick={onHide} disabled={disabled} />}
      <IconButton name="ico-trash-2" onClick={onDelete} disabled={disabled} />
    </div>
  );
};

export default PlayerItem;
