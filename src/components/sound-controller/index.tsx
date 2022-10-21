import classnames from 'classnames';
import React, {FC, useEffect} from 'react';

import {useGameState} from '@/states/game';

interface ISoundControllerProps {
  className?: string;
}

let winSound: HTMLAudioElement;
let bgSound: HTMLAudioElement;
let tickSound: HTMLAudioElement;

const SoundController: FC<ISoundControllerProps> = ({className}) => {
  const gameState = useGameState();

  useEffect(() => {
    winSound = new Audio('/win.mp3');
    bgSound = new Audio('/music.mp3');
    tickSound = new Audio('/tick.mp3');
  }, []);

  useEffect(() => {
    if (gameState.runAt) {
      bgSound.currentTime = 0;
      bgSound.play();

      tickSound.currentTime = 0;
      tickSound.play();
    }
  }, [gameState.runAt]);

  useEffect(() => {
    bgSound.volume = gameState.settings.isBackgroundMusicOn ? 1 : 0;
  }, [gameState.settings.isBackgroundMusicOn]);

  useEffect(() => {
    tickSound.volume = gameState.settings.isSoundEffectOn ? 1 : 0;
  }, [gameState.settings.isSoundEffectOn]);

  useEffect(() => {
    if (gameState.isShowWinning) {
      winSound.currentTime = 0;
      // winSound.play();
    }
  }, [gameState.isShowWinning]);

  return <div className={classnames(className)}></div>;
};

export default SoundController;
