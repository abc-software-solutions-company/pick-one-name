import {FC, ReactNode} from 'react';
import cln from 'classnames';

import {useSetting} from '@/common/hooks/use-setting';

import SettingGame from '../option/setting-random';

interface IRandomToolBar {
  className?: string;
  children?: ReactNode;
}

const RandomToolBar: FC<IRandomToolBar> = ({children, className}) => {
  const {isSettingOpen} = useSetting();

  return (
    <div
      className={cln(
        className,
        'y-5 flex flex-col gap-4 rounded-2xl border border-gray-300 px-2 py-5 shadow-[0_0_4px_0_#797979] md:p-10 lg:py-10 lg:px-8 3xl:gap-8'
      )}
    >
      {isSettingOpen ? <SettingGame /> : children}
    </div>
  );
};

export default RandomToolBar;
