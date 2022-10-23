import classnames from 'classnames';
import {gsap} from 'gsap';
import React, {FC, useEffect} from 'react';

import {useGame} from '@/states/game';

interface ISoundControllerProps {
  className?: string;
}

let winSound: HTMLAudioElement;
let bgSound: HTMLAudioElement;
let tickSound: HTMLAudioElement;

const SoundController: FC<ISoundControllerProps> = ({className}) => {
  const game = useGame();

  useEffect(() => {
    winSound = new Audio('/win.mp3');
    bgSound = new Audio('/music.mp3');
    tickSound = new Audio('/tick.mp3');
  }, []);

  useEffect(() => {
    if (game.state.runAt) {
      bgSound.currentTime = 0;
      bgSound.volume = 0;
      bgSound.play();

      tickSound.currentTime = 0;
      tickSound.volume = 0;
      tickSound.play();
    }
  }, [game.state.runAt]);

  useEffect(() => {
    const volume = game.state.settings.isBackgroundMusicOn ? 1 : 0;
    if (game.state.runAt) gsap.to(bgSound, {volume, duration: 2});
  }, [game.state.settings.isBackgroundMusicOn, game.state.runAt]);

  useEffect(() => {
    const volume = game.state.settings.isSoundEffectOn ? 1 : 0;
    if (game.state.runAt) gsap.to(tickSound, {volume, duration: 0.5});
  }, [game.state.settings.isSoundEffectOn, game.state.runAt]);

  useEffect(() => {
    if (game.state.isShowWinner) {
      winSound.currentTime = 0;
      winSound.play();
    }
  }, [game.state.isShowWinner]);

  return <div className={classnames(className)}></div>;
};

export default SoundController;
