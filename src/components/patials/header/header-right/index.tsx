import React, {FC} from 'react';

import Button from '@/core-ui/button';
import Icon from '@/core-ui/icon';

const HeaderRight: FC = () => {
  return (
    <div className="flex grow items-center justify-end gap-1 text-[#FAFAFA] lg:grow-0 lg:gap-6">
      <button className="flex items-center justify-center rounded bg-blue-600 p-2 lg:rounded-md lg:p-4">
        <Icon name="ico-volume-1" />
      </button>
      <Button className="flex items-center justify-center rounded bg-blue-600 px-4 py-2 lg:rounded-lg lg:px-8 lg:py-4">
        <span className="text-sm font-semibold leading-6 lg:text-lg">Đăng nhập</span>
      </Button>
    </div>
  );
};

export default HeaderRight;
