interface IAuthInput {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
}

const AuthInput: React.FC<IAuthInput> = ({label, type, value, placeholder, onChange}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="mb-2 text-2xl">{label}</div>
      <input
        className="h-auto w-full rounded-lg border border-gray-300 px-2 py-3
                text-black"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default AuthInput;
