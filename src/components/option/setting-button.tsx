import React from 'react';

import useToast from '@/core-ui/toast';

const SettingButton = () => {
  const toast = useToast();

  const handleClick = () => {
    toast.show({type: 'info', title: '', content: 'Tính năng này sẽ được cập nhật sau'});
  };

  return (
    <button
      className="flex w-full grow items-center justify-center rounded bg-blue-600 py-2 px-3 text-sm font-semibold
        leading-5 text-neutral-50 hover:bg-blue-700 md:rounded-lg md:px-6 md:py-3 md:text-lg lg:rounded-lg lg:py-4 lg:px-8 lg:text-xl"
      onClick={handleClick}
    >
      Cài đặt
    </button>
  );
};
export default SettingButton;
