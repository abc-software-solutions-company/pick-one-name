import React from 'react';

interface ISettingButtonProps {
  onClick?: () => void;
}

const SettingButton: React.FC<ISettingButtonProps> = ({onClick}) => {
  return (
    <button
      className="flex h-9 w-full grow items-center  justify-center rounded bg-blue-600 py-2 px-3 text-sm font-semibold leading-5
        text-slate-50 hover:bg-blue-700 md:h-12 lg:h-14 lg:rounded-lg lg:py-4 lg:px-8 lg:text-xl"
      onClick={onClick}
    >
      Tùy chỉnh
    </button>
  );
};

export default SettingButton;
