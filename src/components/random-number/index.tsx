import {useAnimation} from 'framer-motion';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';

// eslint-disable-next-line import/extensions
import Button from '@/core-ui/button';

import {useRandomNumber} from '../../hooks/use-random-number';
import Rotaion from './rotation';
import style from './style.module.scss';

export default function RandomNumber() {
  const [minNumber, setMinNumber] = useState(1 || '');
  const [maxNumber, setMaxNumber] = useState(100 || '');
  const controls = useAnimation();
  const [isAnimationStart, setIsAnimationStart] = useState(false);
  const {wheelnumbers, randomNumbers, generateWheelNumbers, generateRandomNumbers, updateRandomNumbers} =
    useRandomNumber();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    generateWheelNumbers();
    generateRandomNumbers(maxNumber);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [generateWheelNumbers, generateRandomNumbers, maxNumber]);

  function generateRandomNumber(): number {
    // const favoredNumber = 100;
    // const isFavoredNumber = Math.random() < 0.5;
    // return isFavoredNumber ? favoredNumber : Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }

  const onAnimationStart = () => {
    if (!isAnimationStart) {
      setIsAnimationStart(true);
      controls.start('start');
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      controls.start('stop');
      setIsAnimationStart(false);
    }, 5000);
  };

  function handleMaxNumber(e: ChangeEvent<HTMLInputElement>) {
    const newMaxNumber = Number(e.target.value);
    setMaxNumber(newMaxNumber);
    updateRandomNumbers(newMaxNumber);
  }

  function handleClick() {
    const randNumber = generateRandomNumber();
    console.log('🚀🚀🚀 -> handleClick -> randNumber:::', randNumber);
    updateRandomNumbers(randNumber);
    onAnimationStart();
  }

  return (
    <div className={style['page-number']}>
      <div className="flex h-52 w-full gap-3">
        <div className="flex w-2/3 items-center justify-center rounded-sm bg-white text-center text-5xl text-black">
          <div className="flex h-full w-full items-center justify-center gap-3">
            <div className={style.embla}>
              <div className="embla__shadow embla__shadow--top" />
              <div className="embla__shadow embla__shadow--bottom" />
              <div className="flex items-center justify-center gap-10">
                {randomNumbers.map((n, i) => (
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
        <div className="flex w-1/3 flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-center">Tối thiểu</span>
            <input
              type="number"
              className="border-none p-3 text-lg text-black focus-visible:border-0"
              value={minNumber || ''}
              onChange={e => setMinNumber(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-center">Tối đa</span>
            <input
              type="number"
              className="border-none p-3 text-lg text-black focus-visible:border-0"
              value={maxNumber || ''}
              onChange={handleMaxNumber}
            />
          </div>
        </div>
      </div>
      <Button
        className="button mt-4 w-1/3 border border-white px-8 hover:bg-white hover:text-black"
        disabled={isAnimationStart}
        onClick={handleClick}
      >
        Click
      </Button>
    </div>
  );
}
