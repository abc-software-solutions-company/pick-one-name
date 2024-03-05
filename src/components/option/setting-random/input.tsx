import {FC} from 'react';

import ColorPickerIcon from '@/core-ui/color-picker-icon';

interface IInputSettingProps {
  label: string;
  placeholder?: string;
  value?: string;
  color?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSetting: FC<IInputSettingProps> = ({label, color, placeholder, value, onClick, onChange}) => {
  return (
    <div className="flex flex-col gap-1 xl:gap-2">
      <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">{label}</label>
      <div className="flex justify-between">
        <div className="relative w-full">
          <input
            placeholder={placeholder}
            maxLength={20}
            value={value}
            onChange={onChange}
            onClick={onClick}
            className="w-full flex-grow rounded-lg border border-slate-300 bg-neutral-50 py-3 px-2 text-sm lg:text-xl xl:text-xl"
          />
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
            <ColorPickerIcon onClick={onClick} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSetting;
