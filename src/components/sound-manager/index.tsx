import React, {FC, useEffect} from 'react';
import classnames from 'classnames';
import {gsap} from 'gsap';
import {useGlobal} from '@/hooks/use-global';
import {useRandomNumber} from '@/hooks/use-random-number';

interface ISoundManagerProps {
  className?: string;
}

let winSound: HTMLAudioElement;
let bgSound: HTMLAudioElement;
let tickSound: HTMLAudioElement;

const SoundManager: FC<ISoundManagerProps> = ({className}) => {
  const {isAnimationStart, isDone} = useRandomNumber();
  const {isMusic} = useGlobal();

  useEffect(() => {
    winSound = new Audio('/win.mp3');
    bgSound = new Audio('/music2.mp3');
    tickSound = new Audio('/tick2.mp3');
  }, []);

  useEffect(() => {
    if (isAnimationStart) {
      bgSound.currentTime = 0;
      bgSound.volume = 0;
      bgSound.play();

      tickSound.currentTime = 0;
      tickSound.volume = 0;
      tickSound.play();

      winSound.currentTime = 0;
      winSound.volume = 0;
    }
  }, [isAnimationStart]);

  useEffect(() => {
    const volume = isMusic ? 1 : 0;
    if (isAnimationStart) gsap.to(bgSound, {volume, duration: 2});
  }, [isAnimationStart, isMusic]);

  useEffect(() => {
    const volume = isMusic ? 1 : 0;
    if (isAnimationStart) {
      gsap.to(tickSound, {volume, duration: 0.5});
      gsap.to(winSound, {volume, duration: 0.1});
    }
  }, [isAnimationStart, isMusic]);

  useEffect(() => {
    if (isDone) {
      winSound.play();
    } else {
      winSound.pause();
    }
  }, [isDone]);

  return <div className={classnames(className)}></div>;
};

export default SoundManager;
