import {sanitizeInput} from '@/utils/sanitize-input';

import {useRandomNumber} from '@/common/hooks/use-random-number';

interface IInputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const InputNumber = ({label, value, onChange}: IInputNumberProps) => {
  const {isAnimationStart} = useRandomNumber();
  return (
    <div className="flex flex-col gap-1 lg:gap-4">
      <label className="items-start text-xl font-bold text-black 3xl:text-2xl">{label}</label>
      <input
        disabled={isAnimationStart}
        value={value}
        minLength={1}
        maxLength={7}
        className="rounded-lg border border-gray-300 bg-neutral-50 p-2 text-sm md:py-3 md:px-2 md:text-lg"
        onChange={e => {
          const sanitizedValue = sanitizeInput(e.target.value);
          onChange(Number(sanitizedValue));
        }}
      />
    </div>
  );
};
export default InputNumber;
