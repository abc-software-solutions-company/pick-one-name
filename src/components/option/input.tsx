import {sanitizeInput} from '@/utils/sanitize-input';

interface IInputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const InputNumber = ({label, value, onChange}: IInputNumberProps) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-4">
      <label className="items-start text-xl font-bold text-black lg:gap-4 3xl:text-2xl">{label}</label>
      <input
        value={value !== 0 ? value : ''}
        minLength={1}
        maxLength={7}
        className="rounded-lg border border-gray-300 bg-slate-50 p-2 text-xs lg:py-3 lg:px-2 lg:text-lg"
        placeholder="Bạn hãy nhập số ..."
        onChange={e => {
          const sanitizedValue = sanitizeInput(e.target.value);
          onChange(Number(sanitizedValue));
        }}
      />
    </div>
  );
};
export default InputNumber;
