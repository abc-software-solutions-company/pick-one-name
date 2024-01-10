import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

import {linksList} from './const';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({className}) => {
  return (
    <div className={classnames(className, 'bg-teal-100 px-[100px] py-3')}>
      <div className="flex items-center justify-between">
        <div className="flex shrink-0 items-center gap-8">
          {linksList.map(link => (
            <Link key={link.href} href={link.href}>
              <span className="cursor-pointer text-xl font-bold leading-6 text-[#0C0A09]">{link.title}</span>
            </Link>
          ))}
        </div>
        <Image
          className="text-[#0C0A09]; text-xl font-bold leading-6"
          src={'/logo.png'}
          width={218}
          height={36}
          alt="logo"
        />
        <div className="flex items-center justify-end gap-6 text-[#030712]">
          {/* <GameSettings className="header" />
            <SoundController /> */}
          <div className="flex">
            <Button className="flex justify-center gap-2 rounded-[8px_0_0_8px] border-[3px] border-[#000] bg-[#FAFAFA] py-4 px-3">
              <Icon name="ico-volume-1" />
            </Button>
            <Button className="flex items-center justify-center gap-2 rounded-[0_8px_8px_0] border-[3px] border-l-0 border-[#000] bg-[#FAFAFA] py-4 px-3">
              <Icon name="ico-maximize-3" />
              <span className="text-xl font-semibold leading-6">Phóng to</span>
            </Button>
          </div>
          <div>
            <Button className="flex items-center justify-center gap-2 rounded-lg border-[3px] border-[#000] bg-[#FDE047] py-4 px-8 shadow-[2px_4px_0_0_#000]">
              <span className="text-xl font-semibold leading-6 text-[#030712]">Đăng nhập</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
