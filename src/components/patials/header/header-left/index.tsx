'use client';
import React, {FC, MouseEvent} from 'react';
import Link from 'next/link';
import cls from 'classnames';
import {linksList} from '@/utils/const';

import {TypeMouseEvent} from '../type';

interface IPropsHeaderLeft {
  pathName?: string;
  onClick?: (e: MouseEvent<HTMLSpanElement>, type: TypeMouseEvent) => void;
  onHover?: (e: MouseEvent<HTMLSpanElement>, type: TypeMouseEvent) => void;
  onBlur?: (e: MouseEvent<HTMLSpanElement>) => void;
}

const HeaderLeft: FC<IPropsHeaderLeft> = ({pathName, onClick = () => {}, onHover = () => {}, onBlur = () => {}}) => {
  return (
    <div className="hidden w-auto items-center gap-8 lg:flex">
      {linksList.map(link => (
        <Link href={link.href} key={link.href}>
          <span
            className={cls('cursor-pointer text-lg font-semibold leading-6 hover:text-gray-300 hover:no-underline', {
              active: link.href === pathName
            })}
            onClick={e => onClick(e, 'click')}
            onMouseEnter={e => onHover(e, 'hover')}
            onMouseLeave={e => onBlur(e)}
          >
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderLeft;
