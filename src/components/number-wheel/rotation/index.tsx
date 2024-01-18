import {AnimationControls, motion} from 'framer-motion';
import React, {FC, useEffect, useState} from 'react';

import {IrotateWheelProps, IWheelNumbers} from '../type';

interface IRotateProps {
  position: number;
  numbers: IWheelNumbers[];
  controls: AnimationControls;
  animationStart: boolean;
}

const rotateWheel = {
  start: ({rotate}: IrotateWheelProps) => ({
    rotateX: rotate,
    transition: {type: 'tween', duration: 8, ease: [0.5, 0.1, 0.15, 1]}
  }),
  stop: ({endDeg}: IrotateWheelProps) => ({
    rotateX: endDeg
  })
};

const Rotaion: FC<IRotateProps> = ({position, numbers, controls, animationStart}) => {
  const spinCount = 8;
  const offset = (360 / 10) * position;
  const [endValue, setEndValue] = useState<number>(360 * spinCount - offset);

  useEffect(() => {
    if (animationStart) {
      controls.start(rotateWheel.start);
      const newValue = 360 * spinCount - offset;
      if (newValue !== endValue) {
        setEndValue(newValue);
      }
    }
  }, [endValue, position, offset, controls, animationStart]);

  return (
    <div className="user-select-none relative flex items-center overflow-visible perspective-1000">
      <div className="absolute left-1/2 top-1/2 z-10 h-[85px] w-[71px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-50 p-4 px-2"></div>
      <motion.div
        className="absolute z-20 h-full w-full will-change-transform transform-style-preserve-3d"
        custom={{
          rotate: [0, endValue],
          endDeg: endValue
        }}
        animate={controls}
        variants={rotateWheel}
        onAnimationComplete={() => console.log('Animation complete')}
      >
        {numbers.map((num, index: number) => (
          <div
            className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-center opacity-0 backface-hidden"
            key={index}
            style={num.style}
          >
            <p className="font-bold sm:text-6xl lg:text-7xl">{num.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Rotaion;
