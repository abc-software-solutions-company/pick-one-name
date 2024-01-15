import {FC} from 'react';

import {transaltion} from '@/utils/translation';

import FooterLeft from './footer-left';
import FooterRight from './footer-right';

const Footer: FC = () => {
  return (
    <div className="bg-footer-winding-line relative bottom-0 flex shrink-0 flex-col items-center gap-8 bg-[#000] bg-clip-border bg-bottom bg-no-repeat px-[100px] py-8 text-[#FFF]">
      <div className="flex w-full items-center justify-between">
        <FooterLeft />
        <FooterRight />
      </div>
      <div className="lead font-poppins text-base font-medium text-neutral-50">{transaltion.footer.createdBy}</div>
    </div>
  );
};

export default Footer;
