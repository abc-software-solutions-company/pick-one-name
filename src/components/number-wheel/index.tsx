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
    generateNumberList(1000);
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
    generateRandNumber(1000, 1);
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
        <div className="flex w-full items-center justify-center rounded-sm text-center text-5xl">
          <div className="flex h-number w-full items-center gap-3 rounded-xl">
            <div className={cls('relative h-full w-full overflow-hidden')}>
              <div className="flex h-full w-full items-center justify-center gap-14 md:gap-[4.5rem] lg:gap-[90px]">
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
      </div>
      <Button
        className="inline-flex h-14 w-[394px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-neutral-50"
        disabled={isAnimationStart}
        onClick={handleClick}
      >
        Quay
      </Button>
    </div>
  );
};

export default NumberWheel;
