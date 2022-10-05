import classnames from 'classnames';
import {gsap} from 'gsap';
import React, {FC, memo, ReactNode, useEffect, useRef, useState} from 'react';

import {IPlayer} from '@/utils/players';
import {rangeInt} from '@/utils/random';

import constant from './contanst';
import WheelAnchor from './indicator';
import styles from './lucky-wheel.module.scss';

interface IWheelOfFortuneProps {
  className?: string;
  players: IPlayer[];
  winner?: IPlayer;
  size?: number;
  colors?: string;
  trigger?: ReactNode;
  onComplete?: () => void;
}

let firstRun = true;
let spinSound: HTMLAudioElement;
let bgSound: HTMLAudioElement;
let winSound: HTMLAudioElement;

const LuckyWheel: FC<IWheelOfFortuneProps> = ({
  className,
  players,
  winner,
  trigger,
  size = 700,
  colors = constant.colors,
  onComplete
}) => {
  const [redraw, setRedraw] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const spintPoints = useRef<number[]>([]);

  if (!players.length) players = constant.defaultPlayers;

  const step = 360 / players.length;
  const indicatorDegree = 43;
  const wheelWidth = wheelRef.current?.clientWidth || size;

  let polygon = '';
  if (players.length === 1) polygon = 'circle(50% at 50% 50%)';
  if (players.length === 2) polygon = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
  if (players.length === 3) polygon = 'polygon(50% -100%, 89% 46%, 50% 100%, 11% 46%)';
  if (players.length === 4) polygon = 'polygon(0 10%, 50% -15%, 100% 10%, 50% 100%)';
  if (players.length === 5) polygon = 'polygon(0 1%, 50% -15%, 100% 1%, 50% 100%)';
  if (players.length === 6) polygon = 'polygon(50% 100%, 1% 0%, 99% 0%)';
  if (players.length === 7) polygon = 'polygon(50% 100%, 2% 0%, 98% 0%)';
  if (players.length === 8) polygon = 'polygon(50% 100%, 3% 0%, 97% 0%)';
  if (players.length === 9) polygon = 'polygon(50% 100%, 4% 0%, 96% 0%)';
  if (players.length === 10) polygon = 'polygon(50% 100%, 4.8% 0%, 95.8% 0%)';
  if (players.length > 10) polygon = 'polygon(50% 100%, 5% 0%, 95% 0%)';

  useEffect(() => {
    spinSound = new Audio('/tick.mp3');
    spinSound.volume = 0.5;
    bgSound = new Audio('/music.mp3');
    winSound = new Audio('/win.mp3');

    spintPoints.current = [];
    for (let i = 0; i < 50; i++) {
      spintPoints.current.push(Math.round(step * i + 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  useEffect(() => {
    const handleRedraw = () => setRedraw(redraw + 1);
    window.addEventListener('resize', handleRedraw, false);
    return () => window.removeEventListener('resize', handleRedraw, false);
  }, [redraw]);

  useEffect(() => {
    if (winner) {
      const winnerIndex = players.indexOf(winner);
      const element = wheelRef.current;

      if (element) {
        const stopPoint = players.length < 20 ? step / 2 - 2 : 0;
        const stopAt = rangeInt(-stopPoint, stopPoint);
        const currentRotation = gsap.getProperty(element, 'rotation') as number;
        const rotateCount = 360 * 7;
        const remainDegreeAfterSpin = rotateCount - currentRotation;
        const destination = firstRun ? 360 : currentRotation + remainDegreeAfterSpin + 360;
        const winnerDestination = rotateCount + stopAt - winnerIndex * step - indicatorDegree;
        // Setup Animations
        const startDuration = {countdown: 0};
        const normalDuration = {countdown: 0};
        const endDuration = {countdown: 0};
        let prePercent = 0;
        const spinStart = gsap.to(element, {rotation: destination, duration: 2, ease: 'power2.in'});
        const spinNormal = gsap.to(element, {rotation: 360 * 5, duration: 3, ease: 'none'});
        const spinEnd = gsap.to(element, {rotation: winnerDestination, duration: 10, ease: 'power2.out'});
        const timeline = gsap.timeline({paused: true});
        // Callbacks
        const playSound = (percent: number) => {
          if (percent > prePercent) {
            spinSound.play();
            prePercent = percent;
          }
        };
        // Easing In
        spinStart.eventCallback('onStart', function () {
          prePercent = 0;
          gsap.set(startDuration, {countdown: 0});
          gsap.to(startDuration, {countdown: 100, duration: 2, ease: 'power4.in'});

          gsap.set(bgSound, {volume: 0});
          gsap.to(bgSound, {volume: 1, duration: 3});
          bgSound.play();
        });
        spinStart.eventCallback('onUpdate', function () {
          playSound(Math.round(startDuration.countdown));
        });
        spinStart.eventCallback('onComplete', function () {
          gsap.set(element, {clearProps: 'all'});
        });
        // No Easing
        spinNormal.eventCallback('onStart', function () {
          prePercent = 0;
          gsap.set(normalDuration, {countdown: 0});
          gsap.to(normalDuration, {countdown: 100, duration: 3});
        });
        spinNormal.eventCallback('onUpdate', function () {
          playSound(Math.round(normalDuration.countdown));
        });
        spinNormal.eventCallback('onComplete', function () {
          gsap.set(element, {clearProps: 'all'});
        });
        // Easing Out
        spinEnd.eventCallback('onStart', function () {
          prePercent = 0;
          gsap.set(endDuration, {countdown: 0});
          gsap.to(endDuration, {countdown: 100, duration: 10, ease: 'power2.out'});

          gsap.to(bgSound, {
            volume: 0,
            duration: 10,
            onComplete: function () {
              bgSound.pause();
              bgSound.currentTime = 0;
            },
            callbackScope: bgSound
          });
        });
        spinEnd.eventCallback('onUpdate', function () {
          playSound(Math.round(endDuration.countdown));
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
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  return (
    <div className={classnames(styles['wheel-of-fortune'], className)}>
      <div className="wheel-inner" ref={wheelRef}>
        {players.length > 0 &&
          players.map((player, index) => {
            const degree = index * step;
            const width = wheelWidth * (step / 100);
            const wheelStyles = {
              backgroundColor: colors[index],
              transform: `rotate(${degree}deg)`,
              width: `${step}%`,
              left: `calc(50% - ${width / 2}px)`,
              clipPath: polygon
            };
            return (
              <div className={classnames(players.length === 1 && 'circle')} style={wheelStyles} key={index}>
                <span>{player.name}</span>
              </div>
            );
          })}
      </div>
      <div className="wheel-dot">{trigger && players.length > 1 && <>{trigger}</>}</div>
      <div className="wheel-indicator" ref={indicatorRef}>
        <WheelAnchor />
      </div>
    </div>
  );
};

export default memo(LuckyWheel);
