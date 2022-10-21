import classnames from 'classnames';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import ButtonGroup from '@/core-ui/button-group';
import Icon from '@/core-ui/icon';
import {GameOperations, useGameDispatch, useGameState} from '@/states/game';

import styles from './style.module.scss';

interface IProps {
  className?: string;
}

const GameSettings: FC<IProps> = ({className}) => {
  const gameState = useGameState();
  const gameDispatch = useGameDispatch();

  const soundEnabled = gameState.settings.isBackgroundMusicOn;
  const effectEnabled = gameState.settings.isSoundEffectOn;

  return (
    <div className={classnames(styles['game-settings'], styles[className + ''])}>
      <ButtonGroup>
        <Button
          variant={'contained'}
          color={soundEnabled ? 'primary' : 'secondary'}
          onClick={() => GameOperations.setSettings({isBackgroundMusicOn: !soundEnabled})(gameDispatch)}
        >
          <Icon name="ico-music" />
        </Button>
        <Button
          variant="contained"
          color={effectEnabled ? 'primary' : 'secondary'}
          onClick={() => GameOperations.setSettings({isSoundEffectOn: !effectEnabled})(gameDispatch)}
        >
          <Icon name="ico-speaker" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GameSettings;
