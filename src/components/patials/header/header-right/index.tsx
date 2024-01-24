import cls from 'classnames';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';
import {useGlobal} from '@/hooks/use-global';

const HeaderRight: FC = () => {
  const {isMusic, toggleMusic} = useGlobal();

  return (
    <div className="flex grow items-center justify-end gap-1 text-[#FAFAFA] md:gap-6 lg:grow-0">
      <button
        className={cls('flex items-center justify-center rounded bg-blue-600 p-2 md:rounded-md md:p-4', {
          'bg-gray-500': !isMusic
        })}
        onClick={() => toggleMusic(!isMusic)}
      >
        {isMusic ? <Icon name="ico-volume-1" /> : <Icon name="ico-volume-x" />}
      </button>
      <Button className="flex items-center justify-center rounded bg-blue-600 px-4 py-2 md:rounded-lg md:px-8 md:py-4">
        <span className="text-sm font-semibold leading-6 md:text-lg">Đăng nhập</span>
      </Button>
    </div>
  );
};

export default HeaderRight;
