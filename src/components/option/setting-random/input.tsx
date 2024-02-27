import Icon from '@/core-ui/icon';

interface IInputSettingProps {
  label: string;
  placeholder?: string;
  iconStart?: string;
  iconEnd?: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSetting: React.FC<IInputSettingProps> = ({
  label,
  placeholder,
  iconStart,
  iconEnd,
  value,
  onClick,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-medium text-black">{label}</div>
      <div className="flex justify-between">
        <div className="relative w-full">
          {iconStart && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon name={`ico-${iconStart}`} />
            </div>
          )}
          <input
            type="text"
            placeholder={placeholder}
            maxLength={25}
            value={value}
            onChange={onChange}
            className="w-full flex-grow rounded-lg border border-slate-300 bg-neutral-50 py-4 px-2 text-lg"
          />
          {iconEnd && (
            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
              <Icon name={`ico-${iconEnd}`} onClick={onClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputSetting;
