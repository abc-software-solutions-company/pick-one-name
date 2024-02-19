import React, {FC} from 'react';
import classnames from 'classnames';
import {GameOperations, useGame} from '@/states/game';

import Button from '@/core-ui/button';
import ButtonGroup from '@/core-ui/button-group';
import Icon from '@/core-ui/icon';

import styles from './style.module.scss';

interface IProps {
  className?: string;
}

const GameSettings: FC<IProps> = ({className}) => {
  const game = useGame();

  const soundEnabled = game.state.settings.isBackgroundMusicOn;
  const effectEnabled = game.state.settings.isSoundEffectOn;

  return (
    <div className={classnames(styles['game-settings'], styles[className + ''])}>
      <ButtonGroup>
        <Button
          variant={'contained'}
          color={soundEnabled ? 'primary' : 'secondary'}
          onClick={() => GameOperations.setSettings({isBackgroundMusicOn: !soundEnabled})(game.dispatch)}
        >
          <Icon name="ico-music" />
        </Button>
        <Button
          variant="contained"
          color={effectEnabled ? 'primary' : 'secondary'}
          onClick={() => GameOperations.setSettings({isSoundEffectOn: !effectEnabled})(game.dispatch)}
        >
          <Icon name="ico-speaker" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GameSettings;
