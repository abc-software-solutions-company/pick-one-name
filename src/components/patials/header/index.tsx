'use client';
import cls from 'classnames';
import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, MouseEvent, useEffect, useState} from 'react';

import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import {IPropsActiveEl, TypeMouseEvent} from './type';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({className}) => {
  const controls = useAnimation();
  const pathName = useRouter().pathname;
  const [activeEl, setActiveEL] = useState<IPropsActiveEl>({
    width: 0,
    position: 0
  });

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
    <div className={cls(className, 'relative top-0 border-b border-gray-300 md:px-[100px] md:py-4')}>
      <motion.div
        animate={controls}
        style={{width: activeEl.width, left: activeEl.position}}
        className="absolute bottom-0 inline-block h-1 bg-blue-600"
      />
      <div className="flex items-center justify-between">
        <HeaderLeft
          pathName={pathName}
          onClick={handleSlidingMenu}
          onHover={handleSlidingMenu}
          onBlur={handleBlurMenu}
        />

        <Image src={'/images/logo.png'} width={218} height={36} alt="logo" />

        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
