import {signIn} from 'next-auth/react';
import {usePublic} from '@/hooks/use-public';

import InputLoginForm from './input';
import SocialLoginButton from './social-input-button';

interface ILoginFormProps {
  className?: string;
}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const {gmailValue, setGmailValue, passValue, setPassValue} = usePublic();

  return (
    <div className="flex flex-col p-8 px-11 py-40">
      <div className="h-full p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="flex w-full justify-start text-5xl text-blue-600">Đăng nhập</p>
          <p className="text-base text-gray-500">Hãy nhập tài khoản của bạn</p>
        </div>
        <div className="mb-8 flex flex-col gap-4">
          <InputLoginForm
            label="Gmail"
            type="gmail"
            value={gmailValue}
            placeholder="chinhcao@gmail.com"
            onChange={value => setGmailValue(value)}
          />
          <InputLoginForm
            label="Mật khẩu"
            type="password"
            value={passValue}
            placeholder=""
            onChange={value => setPassValue(value)}
          />
          <div className="flex justify-end text-base text-gray-500">Quên mật khẩu?</div>
          <button className="w-full rounded-lg bg-blue-600 p-4 text-white">Đăng nhập</button>
        </div>
        <div className=" mb-8 flex w-full justify-center text-lg">
          Bạn có tài khoản chưa?
          <p className="text-lg text-blue-600"> Đăng ký</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <SocialLoginButton label="Đăng nhập bằng Google" src="/images/logo-google.png" authType="google" />
          <SocialLoginButton label="Đăng nhập bằng Facebook" src="/images/logo-facebook.png" authType="facebook" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
