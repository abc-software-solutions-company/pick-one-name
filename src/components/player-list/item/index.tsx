import classnames from 'classnames';
import React, {ChangeEventHandler, FC} from 'react';

import IconButton from '@/core-ui/icon-button';
import Input from '@/core-ui/input';
import {IPlayer} from '@/utils/players';

interface IPlayerItemProps {
  className?: string;
  player: IPlayer;
  disabled: boolean;
  onHide: () => void;
  onShow: () => void;
  onDelete: () => void;
  onTextChange: ChangeEventHandler<HTMLInputElement>;
}

const PlayerItem: FC<IPlayerItemProps> = ({className, player, disabled, onHide, onShow, onDelete, onTextChange}) => {
  return (
    <div className={classnames('item', className, !player.visible && 'disabled')}>
      <Input className={'flex-grow'} value={player.name} readOnly={disabled} onChange={onTextChange} />
      {!player.visible && <IconButton name="ico-eye" onClick={onShow} disabled={disabled} />}
      {player.visible && <IconButton name="ico-eye-off" onClick={onHide} disabled={disabled} />}
      <IconButton name="ico-trash-2" onClick={onDelete} disabled={disabled} />
    </div>
  );
};

export default PlayerItem;
