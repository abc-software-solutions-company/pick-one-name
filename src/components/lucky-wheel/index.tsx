import React, {FC, ReactNode, useEffect, useRef} from 'react';
import classnames from 'classnames';
import {gsap} from 'gsap';
import useTracking from '@/common/hooks/use-tracking';
import {IPlayer} from '@/localdb/models/player.model';
import {useGame} from '@/states/game';
import {rangeInt} from '@/utils/random';

import constant from './utils/contanst';
import SpinnerBoard from './spinner-board';
import SpinnerIndicator from './spinner-indicator';
import SpinnerTrigger from './spinner-trigger';

import styles from './style.module.scss';

let firstRun = true;

interface IWheelOfFortuneProps {
  className?: string;
  players: IPlayer[];
  colors?: string[];
  trigger?: ReactNode;
  onComplete?: () => void;
}

const LuckyWheel: FC<IWheelOfFortuneProps> = ({className, players, trigger, colors = constant.colors, onComplete}) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  const game = useGame();
  const tracking = useTracking();

  if (!players.length) players = constant.defaultPlayers;

  const runAnimation = (element: HTMLDivElement, winPlayer: IPlayer) => {
    const segmentSize = 360 / players.length;
    const indicatorAngle = 55;
    const winnerIndex = players.indexOf(winPlayer);

    const spead = 2;
    const segmentCenter = segmentSize / 2;
    const stopPoint = segmentCenter - spead;
    const stopAt = rangeInt(-stopPoint, stopPoint);
    const currentRotation = gsap.getProperty(element, 'rotation') as number;
    const rotateCount = 360 * 8;
    const remainDegreeAfterSpin = rotateCount - currentRotation;
    const destination = firstRun ? 360 : currentRotation + remainDegreeAfterSpin + 360;
    const winnerDestination = rotateCount - winnerIndex * segmentSize - indicatorAngle - segmentCenter + stopAt;
    // Setup Animations
    const startDuration = {countdown: 0};
    const normalDuration = {countdown: 0};
    const endDuration = {countdown: 0};
    const spinStart = gsap.to(element, {rotation: destination, duration: 1.8, ease: 'power2.in'});
    const spinNormal = gsap.to(element, {rotation: 360 * 6, duration: 3, ease: 'none'});
    const spinEnd = gsap.to(element, {rotation: winnerDestination, duration: 10, ease: 'power2.out'});
    const timeline = gsap.timeline({paused: true});
    // Callbacks
    // Easing In
    spinStart.eventCallback('onStart', function () {
      gsap.set(startDuration, {countdown: 0});
      gsap.to(startDuration, {countdown: 100, duration: 2, ease: 'power4.in'});
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
    });
    spinEnd.eventCallback('onComplete', function () {
      onComplete?.();
      firstRun = false;
    });
    // Timeline
    timeline.add(spinStart, 'start');
    timeline.add(spinNormal, 'normal');
    timeline.add(spinEnd, 'end');
    timeline.play();
  };

  useEffect(() => {
    if (game.state.runAt && game.state.winner) {
      const element = wheelRef.current;
      if (element) {
        runAnimation(element, game.state.winner!);
        tracking.event({
          name: 'rotate',
          properties: {
            players
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.state.runAt, game.state.winner]);

  return (
    <div className={classnames(styles['wheel-decide'], className)}>
      <div className={styles['wheel-decide__inner']} ref={wheelRef}>
        <SpinnerBoard segments={players} colors={colors} />
      </div>
      <SpinnerTrigger trigger={trigger} />
      <SpinnerIndicator />
    </div>
  );
};

export default LuckyWheel;
