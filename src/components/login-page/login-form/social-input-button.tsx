import Image from 'next/image';
import {signIn} from 'next-auth/react';

interface ISocialLoginButton {
  label: string;
  src: string;
  authType: 'google' | 'facebook';
}

const SocialLoginButton: React.FC<ISocialLoginButton> = ({label, src, authType}) => {
  const onClick = () => {
    signIn(authType, {callbackUrl: '/'});
  };

  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white py-4"
      onClick={onClick}
    >
      <span className="text-blue-600">{label}</span>
      <Image src={src} width={20} height={20} alt={label} />
    </button>
  );
};

export default SocialLoginButton;
