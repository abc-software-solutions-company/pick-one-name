import classnames from 'classnames';
import React, {FC} from 'react';

import Checkbox from '@/core-ui/checkbox';
import {GameOperations, useGameDispatch, useGameState} from '@/states/game';

import styles from './style.module.scss';

interface IProps {
  className?: string;
}

const GameSettings: FC<IProps> = ({className}) => {
  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  if (gameState.settings.isFetching) return null;

  return (
    <div className={classnames(styles['game-settings'], className)}>
      <div className="flex items-center gap-x-2">
        <Checkbox
          label="Music"
          labelPosition="start"
          checked={gameState.settings.isBackgroundMusicOn}
          onChange={e => GameOperations.setSettings({isBackgroundMusicOn: e.target.checked})(gameDispatch)}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <Checkbox
          label="Effect"
          labelPosition="start"
          checked={gameState.settings.isSoundEffectOn}
          onChange={e => GameOperations.setSettings({isSoundEffectOn: e.target.checked})(gameDispatch)}
        />
      </div>
    </div>
  );
};

export default GameSettings;
