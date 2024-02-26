import React, {FC, useEffect, useRef} from 'react';
import cls from 'classnames';

import Timer from '@/components/timer';

import {useRandomNumber} from '@/common/hooks/use-random-number';

import RandomMainTop from './random-main-top';

interface IRandomMainProps {
  className?: string;
  button: React.ReactNode;
  children?: React.PropsWithChildren<any>;
}

const RandomMain: FC<IRandomMainProps> = ({className, button, children}) => {
  const {isBGImage, setBGImage} = useRandomNumber();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current?.style['0']) {
      setBGImage(true);
    }
  }, [setBGImage]);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url("https://s3.ap-southeast-1.amazonaws.com/samsung-hotel-tv-bucket/temp-upload/Screenshot-2024-02-15-135448-3c6a42ae4a.png")`
      }}
      className={cls(
        className,
        'flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat p-5 shadow'
      )}
    >
      <RandomMainTop containerRef={containerRef} isBGImage={isBGImage} />
      <div className="flex h-full w-full select-none gap-3">{children}</div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {button}
        <Timer />
      </div>
    </div>
  );
};

export default RandomMain;
