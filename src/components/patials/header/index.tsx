'use client';
import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, MouseEvent, useEffect, useState} from 'react';

import SoundManager from '@/components/sound-manager';

import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import {IPropsActiveEl, TypeMouseEvent} from './type';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = () => {
  const controls = useAnimation();
  const pathName = useRouter().pathname;
  const [width, setWidth] = useState(0);
  const [activeEl, setActiveEL] = useState<IPropsActiveEl>({
    width: 0,
    position: 0
  });

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    //* Step 1: Đặt vị trí - độ dài underline = với phần tử có class active
    const activePosition = document.querySelector('.active');
    setActiveEL(() => {
      return {
        width: activePosition?.getBoundingClientRect().width,
        position: activePosition?.getBoundingClientRect().left
      };
    });
  }, [pathName]);

  const handleSlidingMenu = (e: MouseEvent<HTMLSpanElement>, type: TypeMouseEvent) => {
    //* Step 2: Đặt lại vị trí - độ dài underline khi click hoặc hover
    const linkPostion = e.currentTarget?.getBoundingClientRect().left;
    const linkWidth = e.currentTarget?.getBoundingClientRect().width;
    if (activeEl.position !== linkPostion) {
      controls.start({
        left: linkPostion,
        width: linkWidth,
        animationTimingFunction: 'ease'
      });
      if (type === 'click') {
        setActiveEL(() => {
          return {
            width: linkWidth,
            position: linkPostion
          };
        });
      }
    }
  };

  const handleBlurMenu = () => {
    //* Step 3: Chuyển vị trí - độ dài underline về vị trí ban đầu
    controls.start({
      left: activeEl.position,
      width: activeEl.width,
      animationTimingFunction: 'ease'
    });
  };

  return (
    <>
      <motion.div
        animate={controls}
        style={{width: activeEl.width, left: activeEl.position}}
        className="absolute bottom-0 hidden h-1 w-full bg-blue-600 lg:inline-block lg:w-auto"
      />
      <HeaderLeft pathName={pathName} onClick={handleSlidingMenu} onHover={handleSlidingMenu} onBlur={handleBlurMenu} />
      <Image
        width={width < 768 ? '142' : '213'}
        height={width < 768 ? '22' : '32'}
        src={'/images/logo.png'}
        className="h-full w-full"
        alt="logo"
      />
      <HeaderRight />
      <SoundManager />
    </>
  );
};

export default Header;
