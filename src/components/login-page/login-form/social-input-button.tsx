import Image from 'next/image';

interface ISocialLoginButton {
  label: string;
  srcImage: string;
}
const SocialLoginButton = ({label, srcImage}: ISocialLoginButton) => {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white py-4 text-blue-600">
      <span>{label}</span>
      <Image src={srcImage} width={20} height={20} alt={label} />
    </button>
  );
};
export default SocialLoginButton;
