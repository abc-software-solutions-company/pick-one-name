interface IInputLonginForm {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
const InputLoginForm = ({label, value, placeholder, onChange}: IInputLonginForm) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <div className="mb-2 text-2xl">{label}</div>
      <input
        className="h-auto w-full rounded-lg border border-gray-300 px-2 py-3
              text-black"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
export default InputLoginForm;
