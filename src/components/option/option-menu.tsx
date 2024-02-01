import React from 'react';

import DefaultNumberOptions from './default-number';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

interface IOptionMenuProps {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
  setIsSettingOpen: (value: boolean) => void;
}

const OptionMenu: React.FC<IOptionMenuProps> = ({min, max, setMin, setMax, setIsSettingOpen}) => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-4 3xl:gap-8">
        <p className="text-center text-2xl font-bold 3xl:text-3xl">Chọn số ngẫu nhiên</p>
        <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
        <InputNumber label="Tối đa (max 9.999.999)" value={max} onChange={setMax} />
      </div>
      <DefaultNumberOptions />
      <div className="flex items-center gap-2 self-stretch align-bottom lg:gap-4">
        <SettingButton onClick={() => setIsSettingOpen(true)} />
        <HideButton />
      </div>
    </>
  );
};

export default OptionMenu;
