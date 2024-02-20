import Image from 'next/image';

interface ISocialLoginButton {
  label: string;
  src: string;
  onClick: () => void;
}

const SocialLoginButton: React.FC<ISocialLoginButton> = ({label, src, onClick}) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white py-4"
      onClick={onClick}
    >
      <span className="text-blue-600">{label}</span>
      <Image src={src} width={20} height={20} alt={label} />
    </button>
  );
};

export default SocialLoginButton;
