import React, {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

const HeaderRight: FC = () => {
  return (
    <div className="flex items-center justify-end gap-6 text-[#FAFAFA]">
      <Button className="flex items-center justify-center rounded-lg bg-blue-600 p-4">
        <Icon name="ico-volume-1" />
      </Button>
      <Button className="flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4">
        <span className="text-lg font-semibold leading-6">Đăng nhập</span>
      </Button>
    </div>
  );
};

export default HeaderRight;
