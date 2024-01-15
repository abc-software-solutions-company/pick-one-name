import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';

import {infoList} from '@/utils/const';

const FooterLeft: FC = () => {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex items-center justify-start gap-8">
        <Image
          className="text-[#0C0A09]; text-xl font-bold leading-6"
          src={'/images/logo.png'}
          width={218}
          height={36}
          alt="logo"
        />
        <Image
          className="text-[#0C0A09]; text-xl font-bold leading-6"
          src={'/images/logo-abc.png'}
          width={80}
          height={38}
          alt="logo abc"
        />
      </div>
      <div className="flex justify-start gap-8 font-semibold leading-5">
        {infoList.map(item => (
          <Link href={item.href} key={item.title} className="cursor-pointer">
            <span className="cursor-pointer">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLeft;
