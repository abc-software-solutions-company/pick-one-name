interface IInputUpdateUserProfile{
  label: string;
  placeholder: string;
  type: string;
}

const InputUpdateUserProfile: React.FC<IInputUpdateUserProfile> = ({label, type, placeholder}) => {
  return (
    <div className="mb-4">
      <div className="text-gray-950 mb-4 text-lg font-bold md:text-lg xl:text-2xl">{label}</div>
      <input
        className="flex h-8 w-full shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg border border-gray-300 bg-neutral-50 px-2 py-3 md:h-12 xl:h-12"
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default InputUpdateUserProfile;
