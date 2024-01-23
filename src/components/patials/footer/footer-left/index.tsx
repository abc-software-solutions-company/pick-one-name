import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';

import {infoList} from '@/utils/const';

const FooterLeft: FC = () => {
  return (
    <div className="flex flex-col items-start gap-3 md:gap-6 3xl:gap-8">
      <div className="flex w-full items-center justify-center gap-3 md:justify-start md:gap-6 3xl:gap-8">
        <Image src={'/images/logo.png'} width={218} height={36} alt="logo" />
        <Image src={'/images/logo-abc.png'} width={80} height={38} alt="logo abc" />
      </div>
      <div className="flex w-full flex-col items-center gap-2 font-semibold leading-5 md:flex-row md:justify-start md:gap-6 3xl:gap-8">
        {infoList.map(item => (
          <Link href={item.href} key={item.title} className="cursor-pointer">
            <span className="cursor-pointer text-sm">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLeft;
