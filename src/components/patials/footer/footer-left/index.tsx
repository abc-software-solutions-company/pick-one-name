import Image from 'next/image';
import React, {FC} from 'react';

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
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Privacy policy</span>
        <span className="cursor-pointer">Term of service</span>
        <span className="cursor-pointer">Contact</span>
      </div>
    </div>
  );
};

export default FooterLeft;
