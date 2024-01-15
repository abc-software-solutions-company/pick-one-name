'use client';
import cls from 'classnames';
import Link from 'next/link';
import React, {FC, MouseEvent} from 'react';

import {linksList} from '@/utils/const';

interface IPropsHeaderLeft {
  pathName?: string;
  onClick: (e: MouseEvent<HTMLSpanElement>) => void;
}

const HeaderLeft: FC<IPropsHeaderLeft> = ({pathName, onClick}) => {
  return (
    <div className="flex items-center gap-8">
      {linksList.map(link => (
        <Link
          href={link.href}
          key={link.href}
          className={cls(
            'cursor-pointer text-lg font-bold leading-normal text-neutral-50 hover:text-gray-600 hover:no-underline',
            {active: link.href === pathName}
          )}
        >
          <span onClick={e => onClick(e)}>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderLeft;
