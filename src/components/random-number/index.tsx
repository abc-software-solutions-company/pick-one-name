import cls from 'classnames';
import React, {FC, useEffect} from 'react';

import {useSetting} from '@/hooks/use-setting';

import VerticalWheel from '../number-wheel';
import RandomOption from '../option';

const RandomNumber: FC = () => {
  const {isVisible, setVisible} = useSetting();

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  return (
    <div
      className={cls('inline-flex h-full w-full flex-col gap-8 lg:flex lg:flex-row', {
        'relative justify-center': !isVisible
      })}
    >
      <VerticalWheel className={'max-h-[206px] w-full md:max-h-full lg:basis-2/3'} />
      {isVisible && <RandomOption className="w-full lg:basis-1/3" />}
      {!isVisible && (
        <button
          className="absolute -right-12 top-5 inline-flex h-fit -rotate-90 items-center justify-center 
                  rounded-tl-lg rounded-tr-lg bg-blue-600 py-4 px-8 lg:-right-18 3xl:-right-32"
          onClick={() => setVisible(true)}
        >
          <p className="text-lg text-slate-50">Hiện</p>
        </button>
      )}
    </div>
  );
};

export default RandomNumber;
