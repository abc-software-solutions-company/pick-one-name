import React, {FC, useEffect} from 'react';
import cls from 'classnames';

import {useSetting} from '@/common/hooks/use-setting';

import NumberWheel from '../number-wheel';
import RandomOption from '../option';
import RandomToolBar from '../random-toolbar';

const RandomNumber: FC = () => {
  const {isVisible, setVisible} = useSetting();

  useEffect(() => {
    import(/* webpackChunkName: "vendor.lottie-player" */ '@lottiefiles/lottie-player');
  }, []);

  return (
    <div
      className={cls('inline-flex h-full w-full flex-col gap-8 xl:flex xl:flex-row', {
        'relative justify-center': !isVisible
      })}
    >
      <NumberWheel
        className={cls('min-h-[300px] w-full md:min-h-[510px] md:gap-10 md:p-10 xl:basis-2/3 xl:px-21 xl:py-10', {
          'grow xl:grow-0': !isVisible
        })}
      />
      {isVisible && (
        <RandomToolBar className="w-full xl:basis-1/3">
          <RandomOption />
        </RandomToolBar>
      )}
      {!isVisible && (
        <button
          className="-right-12 top-5 inline-flex h-9 max-w-[103px] items-center justify-center rounded-md bg-blue-600 
                  py-4 px-8 md:h-14  xl:absolute xl:-right-18 xl:-rotate-90 xl:rounded-tl-xl xl:rounded-tr-xl 3xl:-right-32"
          onClick={() => setVisible(true)}
        >
          <p className=" text-sm text-slate-50 md:text-lg lg:text-lg">Hiện</p>
        </button>
      )}
    </div>
  );
};

export default RandomNumber;
