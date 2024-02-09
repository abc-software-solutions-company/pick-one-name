import {FC} from 'react';

import {transaltion} from '@/utils/translation';

import FooterLeft from './footer-left';
import FooterRight from './footer-right';

const Footer: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 border-t border-gray-300 px-5 py-2 md:gap-6 md:px-[50px] md:py-4 3xl:gap-8 3xl:px-[100px] 3xl:py-8">
      <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
        <FooterLeft />
        <FooterRight />
      </div>
      <p className="lead font-poppins text-center text-xs font-medium text-blue-500">{transaltion.footer.createdBy}</p>
    </div>
  );
};

export default Footer;
