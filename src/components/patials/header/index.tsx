'use client';
import {FC, MouseEvent, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {motion, useAnimation} from 'framer-motion';
import {useGame} from '@/states/game';

import SoundController from '@/components/sound-controller';
import SoundManager from '@/components/sound-manager';

import {useRandomNumber} from '@/common/hooks/use-random-number';

import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import {IPropsActiveEl, TypeMouseEvent} from './type';

interface IProps {
  className?: string;
}

const Header: FC<IProps> = () => {
  const controls = useAnimation();
  const pathName = useRouter().pathname;
  const {isAnimationStart} = useRandomNumber();
  const game = useGame();

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
    if (isAnimationStart || game.state.isSpinning) {
      e.preventDefault();
      return;
    }
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
        className="absolute bottom-0 hidden h-1 w-full bg-blue-600 lg:inline-block"
      />
      <div className="flex grow items-center md:justify-between">
        <HeaderLeft
          pathName={pathName}
          onClick={handleSlidingMenu}
          onHover={handleSlidingMenu}
          onBlur={handleBlurMenu}
        />
        <HeaderRight />
      </div>
      <SoundManager />
      <SoundController />
    </>
  );
};

export default Header;
