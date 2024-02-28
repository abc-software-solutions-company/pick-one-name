import React, {FC, useEffect, useRef} from 'react';
import {useAnimation} from 'framer-motion';

import useToast from '@/core-ui/toast';

import {useRandomNumber} from '@/common/hooks/use-random-number';
import {useSetting} from '@/common/hooks/use-setting';

import RandomMain from '../common/random-main';
import CongratsNumber from '../modals/modal-congrats-number';

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
    wheelnumbers,
    randomNumber,
    isInputValid,
    randomNumberList,
    isAnimationStart,
    setDone,
    setIsInputValid,
    updateNumberList,
    setAnimationStart,
    generateRandNumber,
    generateNumberList,
    generateWheelNumbers
  } = useRandomNumber();
  const {textColor} = useSetting();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toast = useToast();

  useEffect(() => {
    generateWheelNumbers();
    generateNumberList(max);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [generateWheelNumbers, generateNumberList, generateRandNumber, max]);

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
    <RandomMain
      className={className}
      button={
        <button
          className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-transparent px-4 py-1 text-sm
        font-semibold text-black hover:bg-neutral-50 md:h-14 md:px-8 md:py-4 md:text-lg lg:w-[40%]"
          style={{
            color: textColor,
            borderColor: textColor
          }}
          disabled={isAnimationStart || !isInputValid}
          onClick={handleClick}
        >
          Quay
        </button>
      }
    >
      <div className="flex w-full items-center justify-center rounded-sm text-center">
        <div
          className="relative flex h-16 w-full items-center gap-3 overflow-hidden rounded-xl 
        md:h-24 lg:h-lg-number-container xs:h-14 3xl:h-2xl-number-container"
        >
          <div
            className="wheel-container flex h-full w-full items-center justify-center 
            gap-11 md:scale-175 lg:scale-150 lg:gap-14 xs:scale-100 xs:gap-10 3xl:gap-20"
            style={{color: textColor}}
          >
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
      <CongratsNumber number={randomNumber} open={isDone} onClose={() => setDone(false)} />
    </RandomMain>
  );
};

export default NumberWheel;
