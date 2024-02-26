import React, {FC, useEffect, useRef} from 'react';
import cls from 'classnames';

import Timer from '@/components/timer';

import {useGlobal} from '@/common/hooks/use-global';

import RandomMainTop from './random-main-top';

interface IRandomMainProps {
  className?: string;
  button: React.ReactNode;
  children?: React.PropsWithChildren<any>;
}

const RandomMain: FC<IRandomMainProps> = ({className, button, children}) => {
  const {bgImage, setBGImage} = useGlobal();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem('backgroundImage')) {
      setBGImage(localStorage.getItem('backgroundImage')!);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('backgroundImage')) {
      setBGImage(localStorage.getItem('backgroundImage')!);
    }
  }, [setBGImage]);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url("${bgImage}")`
      }}
      className={cls(
        className,
        'flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat p-5 shadow'
      )}
    >
      <RandomMainTop containerRef={containerRef} isBGImage={!!bgImage} />
      <div className="flex h-full w-full select-none gap-3">{children}</div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {button}
        <Timer />
      </div>
    </div>
  );
};

export default RandomMain;
