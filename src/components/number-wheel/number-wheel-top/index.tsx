import cls from 'classnames';
import React, {FC, useEffect} from 'react';
import screenfull from 'screenfull';

import Icon from '@/core-ui/icon';
import {useGlobal} from '@/hooks/use-global';

interface Iprops {
  isBGImage: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}

const NumberWheelTop: FC<Iprops> = ({isBGImage, containerRef}) => {
  const {isZoom, setZoom} = useGlobal();

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        if (!screenfull.isFullscreen) setZoom(false);
      });
    }
  }, [setZoom]);

  function toggleFullScreen(status: boolean) {
    if (status) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setZoom(status);
  }

  return (
    <div className="flex w-full items-center justify-between px-2">
      <div className="w-10 lg:w-[56px]"></div>
      <div
        className={cls('p-3', {
          'rounded-lg': isBGImage,
          'bg-neutral-50': isBGImage,
          'bg-opacity-50': isBGImage
        })}
      >
        <p
          className={cls('text-gray-950 rounded px-3 text-xl font-bold tracking-tight lg:text-[32px]', {
            'bg-white': isBGImage
          })}
        >
          Random number
        </p>
      </div>
      <button
        className="flex max-h-[32px] max-w-[32px] items-center justify-center rounded bg-blue-600 p-1 hover:bg-blue-700 lg:max-h-[56px] lg:max-w-[56px] lg:rounded-lg lg:p-4"
        onClick={() => toggleFullScreen(!isZoom)}
      >
        {isZoom ? (
          <Icon name="ico-compress" className="text-white" />
        ) : (
          <Icon name="ico-expand" className="text-white" />
        )}
      </button>
    </div>
  );
};

export default NumberWheelTop;
