import classnames from 'classnames';
import {gsap} from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import React, {FC, memo, ReactNode, useEffect, useRef, useState} from 'react';

import {IPlayer} from '@/utils/players';

import WheelAnchor from './indicator';
import styles from './lucky-wheel.module.scss';

let COLORS: string[] = [];
COLORS = COLORS.concat([
  '#7aabce',
  '#f7b2bc',
  '#8dd3c8',
  '#dfc181',
  '#cabbee',
  '#f7caeb',
  '#c5e4c6',
  '#e5c8c4',
  '#cdbeab',
  '#bbc9d6',
  '#ffd7c2',
  '#f7caca'
]);
COLORS = COLORS.concat([
  '#689fc7',
  '#f59ca9',
  '#7bcdc0',
  '#dab86d',
  '#bba8e9',
  '#f4b5e3',
  '#b5dcb6',
  '#ddb8b4',
  '#c4b39c',
  '#acbccd',
  '#ffc8aa',
  '#f4b5b5'
]);
COLORS = COLORS.concat([
  '#5794c1',
  '#f38596',
  '#69c6b7',
  '#d6ae5a',
  '#ac94e4',
  '#f19fdb',
  '#a4d4a6',
  '#d5a8a3',
  '#bba78d',
  '#9cb0c4',
  '#ffb892',
  '#f19f9f'
]);
COLORS = COLORS.concat(...Array(20).fill(COLORS));

interface IWheelOfFortuneProps {
  className?: string;
  players: IPlayer[];
  winner?: IPlayer;
  size?: number;
  colors?: string;
  trigger?: ReactNode;
  onComplete?: () => void;
}
// '#EC6E81', '#f29aa7', '#f7c5cd', '#5CC1B1', '#D9B872', '#5CC1B1', '#fda14d', '#fc7800', '#56c0f0', '#0ea5e9'
const LuckyWheel: FC<IWheelOfFortuneProps> = ({
  className,
  players,
  winner,
  trigger,
  size = 700,
  colors = COLORS,
  onComplete
}) => {
  const [redraw, setRedraw] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  players = players.filter(x => x.visible);

  // #region Wheel
  const step = 360 / players.length;
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
  // #endregion

  useEffect(() => {
    const handleRedraw = () => setRedraw(redraw + 1);
    window.addEventListener('resize', handleRedraw, false);
    return () => window.removeEventListener('resize', handleRedraw, false);
  }, [redraw]);

  useEffect(() => {
    if (winner) {
      console.log('winner', winner);

      const winnerIndex = players.indexOf(winner);
      const element = wheelRef.current;

      if (element) {
        gsap.set(element, {clearProps: 'all'});
        gsap.to(element, {
          duration: 5,
          rotation: -2202 - winnerIndex * step,
          ease: CustomEase.create(
            'custom',
            'M0,0 C0.081,0 0.17,0.042 0.232,0.096 0.27,0.129 0.312,0.212 0.35,0.298 0.368,0.338 0.441,0.557 0.534,0.728 0.59,0.831 0.664,0.904 0.71,0.932 0.792,0.982 0.869,1 1,1'
          ),
          onComplete
        });
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