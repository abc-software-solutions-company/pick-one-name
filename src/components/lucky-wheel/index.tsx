import classnames from 'classnames';
import {gsap} from 'gsap';
import React, {FC, memo, ReactNode, useEffect, useRef} from 'react';

import {IPlayer} from '@/utils/players';
import {rangeInt} from '@/utils/random';

import constant from './contanst';
import WheelAnchor from './indicator';
import styles from './lucky-wheel.module.scss';
import SpinnerBoard from './spinner-board';

interface IWheelOfFortuneProps {
  className?: string;
  players: IPlayer[];
  winner?: IPlayer;
  size?: number;
  colors?: string[];
  trigger?: ReactNode;
  onComplete?: () => void;
}

let firstRun = true;
let bgSound: HTMLAudioElement;
let winSound: HTMLAudioElement;

const LuckyWheel: FC<IWheelOfFortuneProps> = ({
  className,
  players,
  winner,
  trigger,
  colors = constant.colors,
  onComplete
}) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  if (!players.length) players = constant.defaultPlayers;

  const segmentSize = 360 / players.length;
  const indicatorAngle = 55;

  useEffect(() => {
    bgSound = new Audio('/music.mp3');
    winSound = new Audio('/win.mp3');
  }, []);

  useEffect(() => {
    if (winner) {
      console.log(winner);
      const winnerIndex = players.indexOf(winner);
      const element = wheelRef.current;

      if (element) {
        const spead = 2;
        const segmentCenter = segmentSize / 2;
        const stopPoint = segmentCenter - spead;
        const stopAt = rangeInt(-stopPoint, stopPoint);
        const currentRotation = gsap.getProperty(element, 'rotation') as number;
        const rotateCount = 360 * 7;
        const remainDegreeAfterSpin = rotateCount - currentRotation;
        const destination = firstRun ? 360 : currentRotation + remainDegreeAfterSpin + 360;
        const winnerDestination = rotateCount - winnerIndex * segmentSize - indicatorAngle - segmentCenter + stopAt;
        // Setup Animations
        const startDuration = {countdown: 0};
        const normalDuration = {countdown: 0};
        const endDuration = {countdown: 0};
        const spinStart = gsap.to(element, {rotation: destination, duration: 2, ease: 'power2.in'});
        const spinNormal = gsap.to(element, {rotation: 360 * 5, duration: 3, ease: 'none'});
        const spinEnd = gsap.to(element, {rotation: winnerDestination, duration: 10, ease: 'power2.out'});
        const timeline = gsap.timeline({paused: true});
        // Callbacks
        // Easing In
        spinStart.eventCallback('onStart', function () {
          gsap.set(startDuration, {countdown: 0});
          gsap.to(startDuration, {countdown: 100, duration: 2, ease: 'power4.in'});

          gsap.set(bgSound, {volume: 0});
          gsap.to(bgSound, {volume: 1, duration: 3});
          bgSound.play();
        });
        spinStart.eventCallback('onComplete', function () {
          gsap.set(element, {clearProps: 'all'});
        });
        // No Easing
        spinNormal.eventCallback('onStart', function () {
          gsap.set(normalDuration, {countdown: 0});
          gsap.to(normalDuration, {countdown: 100, duration: 3});
        });
        spinNormal.eventCallback('onComplete', function () {
          gsap.set(element, {clearProps: 'all'});
        });
        // Easing Out
        spinEnd.eventCallback('onStart', function () {
          gsap.set(endDuration, {countdown: 0});
          gsap.to(endDuration, {countdown: 100, duration: 10, ease: 'power2.out'});

          gsap.to(bgSound, {
            volume: 0,
            duration: 10,
            onComplete: function () {
              bgSound.pause();
              bgSound.currentTime = 0;
            }
          });
        });
        spinEnd.eventCallback('onComplete', function () {
          onComplete?.();
          firstRun = false;
          if (winSound.paused) gsap.set(winSound, {volume: 0});
          gsap.to(winSound, {volume: 1, duration: 0.5});
          winSound.play();
        });
        // Timeline
        timeline.add(spinStart, 'start');
        timeline.add(spinNormal, 'normal');
        timeline.add(spinEnd, 'end');
        timeline.play();

        // const spin = gsap.to(element, {rotation: 7200, duration: 15, paused: true}).timeScale(0);
        // gsap.to(spin, {
        //   timeScale: 1,
        //   duration: 3,
        //   onStart: function () {
        //     gsap.to(spin, {delay: 3, timeScale: 0, duration: 12});
        //   }
        // });
        // spin.play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  return (
    <>
      <div className={classnames(styles['wheel-decide'], className)}>
        <div className="wheel-decide__inner" ref={wheelRef}>
          <SpinnerBoard segments={players} colors={colors} />
        </div>
        <div className="wheel-decide__dot">{trigger && players.length > 1 && <>{trigger}</>}</div>
        <div className="wheel-decide__indicator">
          <WheelAnchor />
        </div>
      </div>
    </>
  );
};

export default memo(LuckyWheel);
