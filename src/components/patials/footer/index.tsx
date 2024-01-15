import {FC} from 'react';

import FooterLeft from './footer-left';
import FooterRight from './footer-right';

const Footer: FC = () => {
  return (
    <div className="bg-footer-winding-line relative bottom-0 flex shrink-0 flex-col items-center gap-8 bg-[#000] bg-clip-border bg-bottom bg-no-repeat py-8 px-[100px] text-[#FFF]">
      <div className="flex w-full items-center justify-between">
        <FooterLeft />
        <FooterRight />
      </div>
      <div className="lead font-poppins text-base font-medium text-neutral-50">
        Created by ABC Software Solutions Company
      </div>
    </div>
  );
};

export default Footer;
