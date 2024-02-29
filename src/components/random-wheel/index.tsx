import React, {FC, useEffect} from 'react';
import cls from 'classnames';

import Players from '@/components/players';

import {useSetting} from '@/common/hooks/use-setting';

import RandomToolBar from '../random-toolbar';

import Wheel from './wheel';

const RandomWheel: FC = () => {
  const {isVisible, setVisible} = useSetting();
  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  return (
    <div
      className={cls('inline-flex h-full w-full flex-col gap-6 xl:flex xl:flex-row xl:gap-8', {
        'relative items-center justify-center': !isVisible
      })}
    >
      <Wheel
        className={cls('flex basis-1/2 flex-col items-center gap-4 md:gap-4 md:p-10 xl:basis-2/3 xl:px-21 xl:py-5', {
          'grow xl:grow-0': !isVisible
        })}
      />
      {isVisible && (
        <RandomToolBar className="w-full xl:basis-1/3">
          <Players />
        </RandomToolBar>
      )}
      {!isVisible && (
        <button
          className="-right-12 top-5 inline-flex h-fit max-w-[88px] items-center justify-center rounded-md 
                  bg-blue-600 py-4 px-8 xl:absolute xl:-right-18 xl:-rotate-90 xl:rounded-tl-xl xl:rounded-tr-xl 3xl:-right-32"
          onClick={() => setVisible(true)}
        >
          <p className="text-lg text-slate-50">Hiện</p>
        </button>
      )}
    </div>
  );
};

export default RandomWheel;
