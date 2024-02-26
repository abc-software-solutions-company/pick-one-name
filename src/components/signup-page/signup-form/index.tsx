import {useRouter} from 'next/router';

import AuthButton from '@/components/common/auth-page/auth-welcome/auth-button';

import {usePublic} from '@/common/hooks/use-public';

import InputSignupForm from './input';

interface ISignupFormProps {
  className?: string;
}

const SignupForm: React.FC<ISignupFormProps> = () => {
  const {gmailValue, setGmailValue, passValue, setPassValue, rePassValue, setRePassValue, name, setName} = usePublic();
  const route = useRouter();

  const handleLogin = () => {
    route.push('/login');
  };

  return (
    <div className="flex h-full flex-col justify-center lg:p-4 lg:py-40 xl:py-20 2xl:px-11">
      <div className="h-full p-6 md:p-6 2xl:p-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="flex w-full justify-start text-5xl text-blue-600">Đăng ký</p>
          <p className="text-base text-gray-500">Chào mừng bạn đến với chúng tôi</p>
        </div>
        <div className="mb-2 flex flex-col gap-4 lg:mb-8">
          <InputSignupForm
            label="Họ và tên"
            type="text"
            value={name}
            placeholder="Nguyễn Văn A"
            onChange={value => setName(value)}
          />
          <InputSignupForm
            label="Gmail"
            type="gmail"
            value={gmailValue}
            placeholder="example@gmail.com"
            onChange={value => setGmailValue(value)}
          />
          <InputSignupForm
            label="Mật khẩu"
            type="password"
            value={passValue}
            placeholder="********"
            onChange={value => setPassValue(value)}
          />
          <InputSignupForm
            label="Nhập lại mật khẩu"
            type="password"
            value={rePassValue}
            placeholder="********"
            onChange={value => setRePassValue(value)}
          />
        </div>
        <button className="w-full rounded-lg bg-blue-600 p-4 text-white">Đăng ký</button>
        <div className=" mb-6 mt-6 flex w-full justify-center text-lg lg:mb-8">
          Bạn có tài khoản chưa?
          <p className="ml-1 cursor-pointer text-lg text-blue-600" onClick={handleLogin}>
            Đăng nhập
          </p>
        </div>
        <AuthButton />
      </div>
    </div>
  );
};

export default SignupForm;
