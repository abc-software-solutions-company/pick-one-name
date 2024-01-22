import cls from 'classnames';
import React, {FC, useEffect} from 'react';
import screenfull from 'screenfull';

import Button from '@/core-ui/button';
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
    <div className="flex w-full items-center justify-between">
      <div className="w-[56px]"></div>
      <div
        className={cls('p-3', {
          'rounded-lg': isBGImage,
          'bg-neutral-50': isBGImage,
          'bg-opacity-50': isBGImage
        })}
      >
        <p className={cls('text-gray-950 rounded px-3 text-[32px] tracking-tight', {'bg-white': isBGImage})}>
          Random number
        </p>
      </div>
      <Button
        className="max-h-[56px] max-w-[56px] rounded-lg bg-blue-600 p-4"
        onClick={() => toggleFullScreen(!isZoom)}
      >
        {isZoom ? (
          <Icon name="ico-compress" className="text-white" />
        ) : (
          <Icon name="ico-expand" className="text-white" />
        )}
      </Button>
    </div>
  );
};

export default NumberWheelTop;
