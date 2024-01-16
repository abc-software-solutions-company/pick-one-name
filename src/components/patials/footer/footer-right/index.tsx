import Link from 'next/link';
import React, {FC} from 'react';

import Icon from '@/core-ui/icon';
import {findUsList} from '@/utils/const';

const FooterRight: FC = () => {
  return (
    <div className="flex flex-col items-end justify-center gap-3">
      <span>Find us</span>
      <div className="flex items-center justify-end gap-2">
        {findUsList.map(item => (
          <Link key={item.icon} href={item.href}>
            <>
              <Icon className="cursor-pointer text-[#030712]" name={item.icon} />
            </>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterRight;
