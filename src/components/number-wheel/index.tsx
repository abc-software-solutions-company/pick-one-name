import cls from 'classnames';
import {useAnimation} from 'framer-motion';
import React, {FC, useEffect, useRef} from 'react';
import {twMerge} from 'tailwind-merge';

import Button from '@/core-ui/button';
import {useRandomNumber} from '@/hooks/use-random-number';

import NumberWheelTop from './number-wheel-top';
import Rotaion from './rotation';

interface INumberWheelProps {
  className?: string;
}

const NumberWheel: FC<INumberWheelProps> = ({className}) => {
  const controls = useAnimation();
  const {
    isBGImage,
    isAnimationStart,
    wheelnumbers,
    randomNumberList,
    setDone,
    setBGImage,
    setAnimationStart,
    updateNumberList,
    generateRandNumber,
    generateNumberList,
    generateWheelNumbers
  } = useRandomNumber();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    generateWheelNumbers();
    generateNumberList(10000);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [generateWheelNumbers, generateNumberList, generateRandNumber]);

  useEffect(() => {
    if (containerRef.current?.style['0']) {
      setBGImage(true);
    }
  }, [setBGImage]);

  const onAnimationStart = () => {
    if (!isAnimationStart) {
      setDone(false);
      setAnimationStart(true);
      controls.start('start');
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      controls.start('stop');
      setAnimationStart(false);
      setDone(true);
    }, 8300);
  };

  function handleClick() {
    generateRandNumber(10000, 1);
    updateNumberList();
    onAnimationStart();
  }

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url("/images/paddy-field.jpg")`
      }}
      className={cls(
        className,
        twMerge(
          'flex h-full flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat px-5 shadow lg:px-[90px] lg:py-10'
        )
      )}
    >
      <NumberWheelTop containerRef={containerRef} isBGImage={isBGImage} />

      <div className="flex h-full w-full select-none gap-3">
        <div className="flex w-full items-center justify-center rounded-sm text-center">
          <div className="relative flex h-[65px] w-full items-center gap-3 overflow-hidden rounded-xl lg:h-lg-number-container 3xl:h-2xl-number-container">
            <div className="flex h-full w-full items-center justify-center sm:gap-10 lg:scale-125 lg:gap-18 3xl:scale-175 3xl:gap-20">
              {randomNumberList.map((n, i) => (
                <Rotaion
                  key={i}
                  numbers={wheelnumbers}
                  position={n}
                  controls={controls}
                  animationStart={isAnimationStart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button
        className="inline-flex h-14 w-48 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-neutral-50 3xl:w-96 3xl:px-8 3xl:py-4"
        disabled={isAnimationStart}
        onClick={handleClick}
      >
        Quay
      </Button>
    </div>
  );
};

export default NumberWheel;
