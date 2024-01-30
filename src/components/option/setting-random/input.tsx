interface IInputSettingProps {
  label: string;
  placeholder: string;
  iconStart?: any;
  iconEnd?: any;
}

const InputSetting: React.FC<IInputSettingProps> = ({label, placeholder, iconStart, iconEnd}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-medium text-black">{label}</div>
      <div className="flex justify-between">
        <div className="relative w-full">
          {iconStart && <div className="absolute inset-y-0 left-0 flex items-center pl-3">{iconStart}</div>}
          <input
            type="text"
            placeholder={placeholder}
            className="w-full flex-grow rounded-lg border border-slate-300 bg-neutral-50 py-4 px-2 text-lg"
          />
          {iconEnd && <div className="absolute inset-y-0 right-0 flex items-center pr-3">{iconEnd}</div>}
        </div>
      </div>
    </div>
  );
};

export default InputSetting;
