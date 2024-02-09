import cls from 'classnames';
import React, {FC, useEffect, useRef} from 'react';

import Timer from '@/components/timer';
import {useRandomNumber} from '@/hooks/use-random-number';

import RandomMainTop from './random-main-top';

interface IRandomMainProps {
  className?: string;
  title: string;
  button: React.ReactNode;
  children?: React.PropsWithChildren<any>;
}

const RandomMain: FC<IRandomMainProps> = ({className, title, button, children}) => {
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
      style={
        {
          // backgroundImage: `url("/images/paddy-field.jpg")`
        }
      }
      className={cls(
        className,
        'flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat p-5 shadow'
      )}
    >
      <RandomMainTop title={title} containerRef={containerRef} isBGImage={isBGImage} />
      <div className="flex h-full w-full select-none gap-3">{children}</div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {button}
        <Timer />
      </div>
    </div>
  );
};

export default RandomMain;