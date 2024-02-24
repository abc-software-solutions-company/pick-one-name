import {useEffect, useState} from 'react';
import Image from 'next/image';

import Eclipse from '@/core-ui/eclipse';

const LoginWelcome: React.FC = () => {
  const [width, setWidth] = useState(0);

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

  return (
    <div className="relative flex h-44 w-full flex-col overflow-hidden bg-blue-900 md:h-[350px] lg:h-full">
      <div className="mt-[14px] w-fit flex-col justify-center px-5 md:mt-[51px] md:flex md:justify-center md:px-[18px] lg:mt-16 lg:justify-start lg:px-[100px]">
        <Image
          width={width < 768 ? '114' : '213'}
          height={width < 768 ? '17' : '32'}
          src={'/images/logo.png'}
          alt="logo"
          className="mb-3 md:mb-8 lg:mb-[264px]"
        />
        <div className="relative mb-1 lg:mb-4">
          <div className="mb-1 text-lg font-bold text-white md:text-3xl lg:mb-4 lg:text-3xl">
            Chào mừng bạn tới trang web của chúng tôi
          </div>
          <div className="relative h-6 md:h-9 lg:h-9">
            <div className="absolute left-0 top-0 h-6 w-[5px] rounded-tl-[1px] rounded-bl-[1px] bg-blue-50 md:h-9 lg:h-9" />
            <div className="absolute left-[5px] top-0 h-6 w-32 bg-neutral-200 bg-opacity-10 md:h-9 md:w-[220px] lg:h-9 lg:w-[220px]" />
            <div className="absolute left-[9px] top-0 h-6 md:h-9 lg:h-9">
              <div className="absolute -bottom-2 w-full text-lg font-bold leading-9 text-neutral-50 md:text-[32px] lg:left-0 lg:top-0 lg:text-[32px]">
                Pickonename
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-neutral-50 md:text-xl lg:text-xl">
          Cung cấp các dịch vụ quay số random vòng quay, số ngẫu nhiên cho các sự kiện
        </div>
      </div>
      <div className="absolute -bottom-[105px] -left-11 md:-bottom-72 md:-left-32 lg:-bottom-1/3 lg:-left-28">
        <Eclipse />
      </div>
      <div className="absolute -left-20 -bottom-[85px] md:-left-1/4 md:-bottom-64 lg:-left-1/4 lg:-bottom-1/4">
        <Eclipse />
      </div>
    </div>
  );
};
export default LoginWelcome;
