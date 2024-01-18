import {FC} from 'react';

import {transaltion} from '@/utils/translation';

import FooterLeft from './footer-left';
import FooterRight from './footer-right';

const Footer: FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 border-t border-gray-300 md:px-[100px] md:py-8">
      <div className="flex w-full items-center justify-between">
        <FooterLeft />
        <FooterRight />
      </div>
      <div className="lead font-poppins text-base font-medium">{transaltion.footer.createdBy}</div>
    </div>
  );
};

export default Footer;
