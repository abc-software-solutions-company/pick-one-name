import {useRouter} from 'next/router';
import {signIn} from 'next-auth/react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import InputPon from '@/core-ui/input-pon';
import Label from '@/core-ui/label';
import useToast from '@/core-ui/toast';

import {SignInValidator} from '@/modules/auth/validations/login.validator';

import AuthButton from '@/components/common/auth-page/auth-welcome/auth-button';
import InputPassword from '@/components/input-password';

import {ENUM_O_AUTH_PROVIDER} from '@/common/constants';

interface ILoginFormProps {
  className?: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

const defaultValues: ILoginFormData = {email: '', password: ''};

const LoginForm: React.FC<ILoginFormProps> = () => {
  const route = useRouter();
  const toast = useToast();

  const form = useForm<ILoginFormData>({resolver: zodResolver(SignInValidator), defaultValues});
  const {register, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit: SubmitHandler<ILoginFormData> = async formData => {
    formData.email = formData.email.toLowerCase();
    const resp = await signIn(ENUM_O_AUTH_PROVIDER.CREDENTIALS.toLowerCase(), {
      ...formData,
      callbackUrl: '/',
      redirect: false
    });
    if (resp?.error) {
      const error = JSON.parse(resp.error);
      if (error?.status === 401) {
        toast.show({type: 'danger', title: '', content: `Sai email hoặc mật khẩu`});
      }
    } else {
      route.push('/');
    }
  };

  return (
    <div className="flex h-full flex-col justify-center lg:p-8 lg:py-40 xl:py-40 2xl:px-11">
      <form className="h-full p-6 md:p-6 2xl:p-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8 flex flex-col gap-2">
          <p className="flex w-full justify-start text-5xl text-blue-600">Đăng nhập</p>
          <p className="text-base text-gray-500">Hãy nhập tài khoản của bạn</p>
        </div>
        <div className="mb-2 flex flex-col gap-4 lg:mb-8">
          <div>
            <InputPon
              className={`w-full rounded-lg ${
                errors.email && 'focus:border-red-600'
              } h-auto border border-gray-300 px-2 py-3 text-black`}
              {...register('email')}
              placeholder={'Example@gmail.com'}
            />
            {errors.email && <Label className="mt-1 text-red-600" text={errors.email.message} />}
          </div>
          <div>
            <InputPassword restInput={register('password')} placeholder={'********'} errors={!!errors.password} />
            {errors.password && <Label className="mt-1 text-red-600" text={errors.password.message} />}
          </div>
          <div className="flex justify-end text-sm font-bold text-gray-500">Quên mật khẩu?</div>
          <button className="w-full rounded-lg bg-blue-600 p-4 text-white">Đăng nhập</button>
        </div>
        <div className=" mb-6 flex w-full justify-center text-lg lg:mb-8">
          Bạn có tài khoản chưa?
          <p className="ml-1 cursor-pointer text-lg text-blue-600" onClick={() => route.push('/signup')}>
            Đăng ký
          </p>
        </div>
        <AuthButton />
      </form>
    </div>
  );
};

export default LoginForm;
