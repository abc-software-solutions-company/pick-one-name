import React from 'react';

interface ISettingButtonProps {
  onClick: () => void;
}

const SettingButton: React.FC<ISettingButtonProps> = ({onClick}) => {
  return (
    <button
      className="flex w-full grow items-center justify-center rounded bg-blue-600 py-2 px-3 text-sm
        font-semibold leading-5 text-slate-50 hover:bg-blue-700 lg:rounded-lg lg:py-4 lg:px-8 lg:text-xl"
      onClick={onClick}
    >
      Cài đặt
    </button>
  );
};

export default SettingButton;
