import React, {FC, useEffect} from 'react';
import cls from 'classnames';
import screenfull from 'screenfull';

import Icon from '@/core-ui/icon';

import {useGlobal} from '@/common/hooks/use-global';
import {useSetting} from '@/common/hooks/use-setting';

interface Iprops {
  containerRef?: React.RefObject<HTMLDivElement>;
}

const RandomMainTop: FC<Iprops> = ({containerRef}) => {
  const {isZoom, setZoom} = useGlobal();
  const {title, textColor, bgImage, bgColor} = useSetting();

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
        className={cls('flex max-h-9 items-center justify-center px-1 py-3 md:max-h-[52px] md:p-3 lg:max-h-14', {
          'rounded-lg': !!bgImage || !!bgColor,
          'bg-neutral-50': !!bgImage || !!bgColor,
          'bg-opacity-50': !!bgImage || !!bgColor
        })}
      >
        <p
          className={cls(
            'text-gray-950 rounded bg-neutral-50 px-3 text-lg font-bold tracking-tight md:text-2xl lg:text-[32px]',
            {
              'bg-white': !!bgImage || !!bgColor
            }
          )}
          style={{
            color: textColor
          }}
        >
          {title}
        </p>
      </div>
      <button
        className="flex max-h-[32px] max-w-[32px] items-center justify-center rounded border-2 border-black bg-transparent p-1 hover:bg-neutral-50 md:max-h-[56px] md:max-w-[56px] md:rounded-lg md:p-4"
        onClick={() => toggleFullScreen(!isZoom)}
        style={{
          borderColor: textColor
        }}
      >
        {isZoom ? (
          <Icon name="ico-compress" className="text-black" style={{color: textColor}} />
        ) : (
          <Icon name="ico-expand" className="text-black" style={{color: textColor}} />
        )}
      </button>
    </div>
  );
};

export default RandomMainTop;
