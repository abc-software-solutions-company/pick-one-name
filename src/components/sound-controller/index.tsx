import React, {FC, useEffect} from 'react';
import classnames from 'classnames';
import {gsap} from 'gsap';
import {useGame} from '@/states/game';

import {useGlobal} from '@/common/hooks/use-global';

interface ISoundControllerProps {
  className?: string;
}

let winSound: HTMLAudioElement;
let bgSound: HTMLAudioElement;
let tickSound: HTMLAudioElement;

const SoundController: FC<ISoundControllerProps> = ({className}) => {
  const game = useGame();
  const {isMusic} = useGlobal();

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

      winSound.currentTime = 0;
      winSound.volume = 0;
    }
  }, [game.state.runAt]);

  useEffect(() => {
    const volume = isMusic ? 1 : 0;
    if (game.state.runAt) gsap.to(bgSound, {volume, duration: 2});
  }, [isMusic, game.state.runAt]);

  useEffect(() => {
    const volume = isMusic ? 1 : 0;
    if (game.state.runAt) {
      gsap.to(tickSound, {volume, duration: 0.5});
      gsap.to(winSound, {volume, duration: 0.1});
    }
  }, [isMusic, game.state.runAt]);

  useEffect(() => {
    if (game.state.isShowWinner) {
      winSound.play();
    }
  }, [game.state.isShowWinner]);

  return <div className={classnames(className)}></div>;
};

export default SoundController;
