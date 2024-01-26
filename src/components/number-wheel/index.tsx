import cls from 'classnames';
import {useAnimation} from 'framer-motion';
import React, {FC, useEffect, useRef} from 'react';

import Button from '@/core-ui/button';
import useToast from '@/core-ui/toast';
import {useRandomNumber} from '@/hooks/use-random-number';

import CongratsNumber from '../modals/modal-congrats-number';
import Timer from '../timer';
import NumberWheelTop from './number-wheel-top';
import Rotaion from './rotation';

interface INumberWheelProps {
  className?: string;
}

const NumberWheel: FC<INumberWheelProps> = ({className}) => {
  const controls = useAnimation();
  const {
    max,
    min,
    isDone,
    isBGImage,
    randomNumber,
    wheelnumbers,
    isInputValid,
    isAnimationStart,
    randomNumberList,
    setDone,
    setBGImage,
    setIsInputValid,
    updateNumberList,
    setAnimationStart,
    generateRandNumber,
    generateNumberList,
    generateWheelNumbers
  } = useRandomNumber();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  useEffect(() => {
    generateWheelNumbers();
    generateNumberList(max);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [generateWheelNumbers, generateNumberList, generateRandNumber, max]);

  useEffect(() => {
    if (containerRef.current?.style['0']) {
      setBGImage(true);
    }
  }, [setBGImage]);

  useEffect(() => {
    setIsInputValid(min !== null && max !== null);
  }, [setIsInputValid, min, max]);

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
    if (isInputValid) {
      if (min >= max) {
        toast.show({type: 'danger', title: '', content: 'Số tối thiểu phải nhỏ hơn số tối đa!'});
      } else {
        generateRandNumber();
        updateNumberList();
        onAnimationStart();
      }
    }
  }

  return (
    <div
      ref={containerRef}
      style={
        {
          // backgroundImage: `url("/images/paddy-field.jpg")`
        }
      }
      className={cls(
        className,
        'flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat p-5 shadow md:gap-10 md:p-10 lg:px-21 lg:py-10'
      )}
    >
      <NumberWheelTop containerRef={containerRef} isBGImage={isBGImage} />
      <div className="flex h-full w-full select-none gap-3">
        <div className="flex w-full items-center justify-center rounded-sm text-center">
          <div className="relative flex h-18 w-full items-center gap-3 overflow-hidden rounded-xl md:h-19 lg:h-lg-number-container 3xl:h-2xl-number-container">
            <div className="wheel-container flex h-full w-full items-center justify-center gap-10 md:scale-175 lg:scale-150 lg:gap-14 3xl:gap-20">
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
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <Button
          className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-1 text-sm
        font-semibold text-neutral-50 hover:bg-blue-700 md:h-14 md:py-4 md:px-8 md:text-lg lg:w-[40%]"
          disabled={isAnimationStart || !isInputValid}
          onClick={handleClick}
        >
          Quay
        </Button>
        <Timer />
      </div>
      <CongratsNumber number={randomNumber} open={isDone} onClose={() => setDone(false)} />
    </div>
  );
};

export default NumberWheel;
