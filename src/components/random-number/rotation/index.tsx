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
    transition: {type: 'tween', duration: 4, ease: [0.5, 0.1, 0.15, 1]}
  }),
  stop: ({endDeg}: IrotateWheelProps) => ({
    rotateX: endDeg
  })
};

const Rotaion: FC<IRotateProps> = ({position, numbers, controls, animationStart}) => {
  const spinCount = 2;
  const offset = (360 / 10) * position;
  const [endValue, setEndValue] = useState<number>(360 * spinCount - offset);

  useEffect(() => {
    if (animationStart) {
      controls.start(rotateWheel.start);
      const newValue = 360 * spinCount - offset;
      if (newValue !== endValue) {
        console.log('🚀🚀🚀 -> endValue:::', newValue);
        setEndValue(newValue);
      }
    }
  }, [endValue, position, offset, controls, animationStart]);

  return (
    <div className="embla__viewport embla__viewport--center overflow-hidden">
      <motion.div
        className="embla__container"
        custom={{
          rotate: [0, endValue],
          endDeg: endValue
        }}
        animate={controls}
        variants={rotateWheel}
        onAnimationComplete={() => console.log('Animation complete')}
      >
        {numbers.map((num, index: number) => (
          <div className="embla__slide" key={index} style={num.style}>
            <p className="text-[50px]">{num.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Rotaion;
