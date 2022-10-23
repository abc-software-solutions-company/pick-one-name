import classnames from 'classnames';
import React, {ChangeEventHandler, FC, KeyboardEvent} from 'react';

import Button from '@/core-ui/button';
import Input from '@/core-ui/input';
import {useGame} from '@/states/game';

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
    <div className={classnames(styles.players__toolbar, className)}>
      <Input
        value={value}
        spellCheck={false}
        placeholder="Enter name(s)"
        onKeyDown={onNewPlayerKeyDown}
        onChange={onNewPlayerTextChange}
        groupEnd={<Button variant="contained" color="primary" text="Save" onClick={addPlayer} disabled={!value} />}
      />
      <Button
        variant="contained"
        color="primary"
        text="Delete All"
        disabled={game.state.players.items.length === 0 || game.state.isSpinning}
        onClick={deleteAllPlayers}
      />
    </div>
  );
};

export default PlayerToolbar;
