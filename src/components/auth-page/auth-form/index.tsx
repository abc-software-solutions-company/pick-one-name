import {usePathname} from 'next/navigation';
import {ROUTE} from '@/common/configs/route.config';

import AuthSocialButton from '../ui/social-button';

import LoginForm from './login';
import SignUpForm from './signup';

interface IAuthFormProps {
  className?: string;
}

const AuthForm: React.FC<IAuthFormProps> = () => {
  const pathName = usePathname();

  return (
    <div className="flex h-full flex-col justify-center lg:p-8 lg:py-40 xl:py-40 2xl:px-11">
      <div className="h-full p-6 md:p-6 2xl:p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="flex w-full justify-start text-5xl text-blue-600">Đăng nhập</p>
          <p className="text-base text-gray-500">Hãy nhập tài khoản của bạn</p>
        </div>
        <div className="mb-2 flex flex-col gap-4 lg:mb-8">
          {pathName === ROUTE.LOGIN ? <LoginForm /> : <SignUpForm />}
          <div className="flex justify-end text-sm font-bold text-gray-500">Quên mật khẩu?</div>
          <button className="w-full rounded-lg bg-blue-600 p-4 text-white">Đăng nhập</button>
        </div>
        <div className=" mb-6 flex w-full justify-center text-lg lg:mb-8">
          Bạn có tài khoản chưa?
          <p className="text-lg text-blue-600"> Đăng ký</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <AuthSocialButton label="Đăng nhập bằng Google" src="/images/logo-google.png" authType="google" />
          <AuthSocialButton label="Đăng nhập bằng Facebook" src="/images/logo-facebook.png" authType="facebook" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
