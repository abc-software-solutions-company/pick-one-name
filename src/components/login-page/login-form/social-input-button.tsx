import Image from 'next/image';

interface ISocialLoginButton {
  label: string;
  src: string;
}
const SocialLoginButton = ({label, src}: ISocialLoginButton) => {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white py-4">
      <span className="text-blue-600">{label}</span>
      <Image src={src} width={20} height={20} alt={label} />
    </button>
  );
};
export default SocialLoginButton;
