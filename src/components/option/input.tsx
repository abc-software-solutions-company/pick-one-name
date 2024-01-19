import {sanitizeInput} from '@/utils/sanitize-input';

interface IInputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const InputNumber = ({label, value, onChange}: IInputNumberProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 text-2xl font-medium text-black">{label}</div>
      <input
        type="text"
        value={value !== 0 ? value : ''}
        className="h-12 rounded-lg border border-slate-300"
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
