import React, {FC, useEffect, useRef} from 'react';
import cls from 'classnames';

import Timer from '@/components/timer';

import {useSetting} from '@/common/hooks/use-setting';

import RandomMainTop from './random-main-top';

interface IRandomMainProps {
  className?: string;
  button: React.ReactNode;
  children?: React.PropsWithChildren<any>;
}

const RandomMain: FC<IRandomMainProps> = ({className, button, children}) => {
  const {bgImage, loadLocal, bgColor} = useSetting();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadLocal();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundColor: bgColor
      }}
      className={cls(
        className,
        'flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-neutral-50 bg-cover bg-center bg-no-repeat p-5 shadow-[0_0_4px_0_#797979]'
      )}
    >
      <RandomMainTop containerRef={containerRef} />
      <div className="flex h-full w-full select-none items-center justify-center gap-3">{children}</div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {button}
        <Timer />
      </div>
    </div>
  );
};

export default RandomMain;
