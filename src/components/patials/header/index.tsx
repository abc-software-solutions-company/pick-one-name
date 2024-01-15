'use client';
import cls from 'classnames';
import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import React, {FC, MouseEvent, useEffect, useState} from 'react';

import HeaderLeft from './header-left';
import HeaderRight from './header-right';

interface IProps {
  className?: string;
}

interface IPropsActiveEl {
  width: number | undefined;
  position: number | undefined;
}

const Header: FC<IProps> = ({className}) => {
  const controls = useAnimation();
  const pathName = usePathname();
  const [activeEl, setActiveEL] = useState<IPropsActiveEl>({
    width: 0,
    position: 0
  });

  useEffect(() => {
    //* Step 1: Đặt vị trí - độ dài cho phần tử có class active
    const activePosition = document.querySelector('.active');
    setActiveEL(() => {
      return {
        width: activePosition?.getBoundingClientRect().width,
        position: activePosition?.getBoundingClientRect().left
      };
    });
  }, [pathName]);

  const slidingMenu = (e: MouseEvent<HTMLSpanElement>) => {
    //* Step 2: Đặt lại vị trí - độ dài cho phần tử được click
    const linkPostion = e.currentTarget.parentElement?.getBoundingClientRect().left;
    const linkWidth = e.currentTarget.parentElement?.getBoundingClientRect().width;
    controls.start({
      left: linkPostion,
      width: linkWidth,
      animationTimingFunction: 'ease'
    });
  };

  return (
    <div
      className={cls(
        className,
        'relative top-0 z-10 rounded-[3px] border-b border-slate-500 bg-transparent px-[100px] py-4'
      )}
    >
      <motion.div
        animate={controls}
        style={{width: activeEl.width, left: activeEl.position}}
        className="absolute bottom-0 inline-block h-1 bg-blue-600"
      />
      <div className="flex items-center justify-between">
        <HeaderLeft pathName={pathName} onClick={slidingMenu} />

        <Image src={'/images/logo.png'} width={218} height={36} alt="logo" />

        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
