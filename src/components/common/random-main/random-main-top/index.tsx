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
  const {text, background, button, loadLocal} = useSetting();

  useEffect(() => {
    loadLocal();
  }, []);

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
      <div className="w-10 max-w-[32px] md:w-[56px]"></div>
      <div
        className={cls('flex items-center justify-center p-2 md:p-3', {
          'rounded-lg': !!background.value || !!background.color,
          'bg-neutral-50': !!background.value || !!background.color,
          'bg-opacity-50': !!background.value || !!background.color
        })}
      >
        <p
          style={{
            color: text.color
          }}
          className={cls(
            'text-gray-950 whitespace-nowrap rounded bg-neutral-50 px-2 text-center text-lg font-bold tracking-tight md:px-3 md:py-1 md:text-2xl lg:text-[32px]',
            {
              'bg-neutral-50': !!background.value || !!background.color
            }
          )}
        >
          {text.value}
        </p>
      </div>
      <button
        className="flex max-h-[32px] max-w-[32px] items-center justify-center rounded border-2 border-black bg-transparent p-1 hover:bg-neutral-50 md:max-h-[56px] md:max-w-[56px] md:rounded-lg md:p-4"
        onClick={() => toggleFullScreen(!isZoom)}
        style={{
          borderColor: button.color
        }}
      >
        {isZoom ? (
          <Icon name="ico-compress" className="text-black" style={{color: button.color}} />
        ) : (
          <Icon name="ico-expand" className="text-black" style={{color: button.color}} />
        )}
      </button>
    </div>
  );
};

export default RandomMainTop;
