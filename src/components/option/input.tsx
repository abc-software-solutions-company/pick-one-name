interface IInputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const InputNumber = ({label, value, onChange}: IInputNumberProps) => {
  const sanitizeInput = (input: string) => {
    return input.replace(/[^0-9]/g, '');
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="leading-52 text-[36px] font-medium text-black">{label}</div>
        <input
          type="text"
          value={value}
          className="font-kanit mb-9 flex h-[70px] w-auto items-center gap-10 self-stretch 
          rounded-xl border-[3px] border-black bg-white px-2 py-8 text-[28px] font-bold shadow-[5px_4px_0_0_#000]"
          onChange={e => {
            const sanitizedValue = sanitizeInput(e.target.value);
            onChange(Number(sanitizedValue));
          }}
        />
      </div>
    </>
  );
};
export default InputNumber;
