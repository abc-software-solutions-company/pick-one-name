import classnames from 'classnames';
import React, {FC} from 'react';

import Checkbox from '@/core-ui/checkbox';
import {GameActions, useGameDispatch, useGameState} from '@/states/game';

import styles from './style.module.scss';

interface IProps {
  className?: string;
}

const GameSettings: FC<IProps> = ({className}) => {
  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  const onMusicChange = () => gameDispatch(GameActions.setMusicOn(!gameState.isMusicOn));
  const onSoundEffectChange = () => gameDispatch(GameActions.setSoundEffectOn(!gameState.isSoundEffectOn));

  return (
    <div className={classnames(styles['game-settings'], className)}>
      <div className="flex items-center gap-x-2">
        <span>Music</span>
        <Checkbox checked={gameState.isMusicOn} onChange={onMusicChange} />
      </div>
      <div className="flex items-center gap-x-2">
        <span>Effect</span>
        <Checkbox checked={gameState.isSoundEffectOn} onChange={onSoundEffectChange} />
      </div>
    </div>
  );
};

export default GameSettings;
