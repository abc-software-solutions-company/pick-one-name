import cls from 'classnames';
import React, {FC, useEffect} from 'react';
import screenfull from 'screenfull';

import Icon from '@/core-ui/icon';
import {useGlobal} from '@/hooks/use-global';

interface Iprops {
  title?: string;
  isBGImage?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
}

const RandomMainTop: FC<Iprops> = ({title, isBGImage, containerRef}) => {
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
      containerRef?.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setZoom(status);
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-10 md:w-[56px]"></div>
      <div
        className={cls('flex max-h-9 items-center justify-center p-3 md:max-h-[52px] lg:max-h-14', {
          'rounded-lg': isBGImage,
          'bg-neutral-50': isBGImage,
          'bg-opacity-50': isBGImage
        })}
      >
        <p
          className={cls('rounded px-3 text-lg font-bold tracking-tight text-gray-950 md:text-2xl lg:text-[32px]', {
            'bg-white': isBGImage
          })}
        >
          {title}
        </p>
      </div>
      <button
        className="flex max-h-[32px] max-w-[32px] items-center justify-center rounded bg-blue-600 p-1 hover:bg-blue-700 md:max-h-[56px] md:max-w-[56px] md:rounded-lg md:p-4"
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

export default RandomMainTop;