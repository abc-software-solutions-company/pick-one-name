import React, {ChangeEventHandler, FC, KeyboardEvent} from 'react';
import classnames from 'classnames';
import {useGame} from '@/states/game';

import Button from '@/core-ui/button';
import Input from '@/core-ui/input';

import styles from './style.module.scss';

interface IPlayerToolbarProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  addPlayer: () => void;
  deleteAllPlayers: () => void;
  onNewPlayerTextChange: ChangeEventHandler<HTMLInputElement>;
  onNewPlayerKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const PlayerToolbar: FC<IPlayerToolbarProps> = ({
  className,
  value,
  addPlayer,
  deleteAllPlayers,
  onNewPlayerKeyDown,
  onNewPlayerTextChange
}) => {
  const game = useGame();

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <p className="text-gray-950 text-2xl font-medium leading-7">Nhập tên</p>
      <div className={classnames(styles.players__toolbar, className)}>
        <Input
          value={value}
          spellCheck={false}
          placeholder="Enter name(s)"
          onKeyDown={onNewPlayerKeyDown}
          onChange={onNewPlayerTextChange}
          maxLength={15}
          groupEnd={<Button variant="contained" color="primary" text="Lưu" onClick={addPlayer} disabled={!value} />}
        />
        <Button
          variant="contained"
          color="primary"
          text="Xóa hết"
          disabled={game.state.players.items.length === 0 || game.state.isSpinning}
          onClick={deleteAllPlayers}
        />
      </div>
    </div>
  );
};

export default PlayerToolbar;
