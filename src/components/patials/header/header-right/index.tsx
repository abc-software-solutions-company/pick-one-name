import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/react';
import cls from 'classnames';

import Icon from '@/core-ui/icon';

import AccountMenu from '@/components/account-menu';

import {useGlobal} from '@/common/hooks/use-global';

const HeaderRight: FC = () => {
  const {isMusic, toggleMusic} = useGlobal();
  const {data: session} = useSession();
  const route = useRouter();

  const handleLogin = () => {
    route.push('/login');
  };

  return (
    <div className="flex grow items-center justify-end gap-1 text-[#FAFAFA] md:gap-6 lg:grow-0">
      <button
        className={cls(
          'flex items-center justify-center rounded bg-blue-600 p-2 hover:bg-blue-700 md:rounded-md md:p-4',
          {
            'bg-gray-500': !isMusic
          }
        )}
        onClick={() => toggleMusic(!isMusic)}
      >
        {isMusic ? <Icon name="ico-volume-1" /> : <Icon name="ico-volume-x" />}
      </button>
      {session && session.user ? (
        <AccountMenu />
      ) : (
        <button
          onClick={handleLogin}
          className="flex cursor-pointer items-center justify-center rounded bg-blue-600 px-4 py-2 md:rounded-lg md:px-8 md:py-4"
        >
          <span className="text-sm font-semibold leading-6 text-white md:text-lg">Đăng nhập</span>
        </button>
      )}
    </div>
  );
};

export default HeaderRight;
