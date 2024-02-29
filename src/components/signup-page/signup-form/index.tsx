import {useRouter} from 'next/router';
import {signIn} from 'next-auth/react';
import classNames from 'classnames';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import InputPon from '@/core-ui/input-pon';
import Label from '@/core-ui/label';
import useToast from '@/core-ui/toast';

import AuthApi from '@/modules/auth/api/auth.api';
import {SignUpValidator} from '@/modules/auth/validations/sign-up.validator';
import {CreateUserDto} from '@/modules/users/dto/create-user.dto';

import AuthButton from '@/components/common/auth-page/auth-welcome/auth-button';
import InputPassword from '@/components/input-password';

import {ENUM_O_AUTH_PROVIDER} from '@/common/constants/auth.constant';

interface ISignupFormProps {
  className?: string;
}

export interface IFormRegisterData extends CreateUserDto {
  confirmPassword: string;
}

const defaultValues = {name: '', email: '', password: '', confirmPassword: ''};

const SignupForm: React.FC<ISignupFormProps> = () => {
  const toast = useToast();

  const form = useForm<IFormRegisterData>({resolver: zodResolver(SignUpValidator), defaultValues});
  const {register, formState, handleSubmit} = form;
  const {errors, isSubmitting} = formState;
  const route = useRouter();

  const onSubmit: SubmitHandler<IFormRegisterData> = async formData => {
    try {
      formData.email = formData.email.toLowerCase();
      const {email, name, password} = formData;
      const provider = ENUM_O_AUTH_PROVIDER.CREDENTIALS;

      await AuthApi.signup({email, name, password, provider});

      signIn(ENUM_O_AUTH_PROVIDER.CREDENTIALS.toLowerCase(), {email, password, callbackUrl: '/'});
    } catch (err: any) {
      if (err?.response?.data && err?.response?.data?.statusCode === 409) {
        toast.show({type: 'danger', title: '', content: 'Email đã tồn tại!'});
      } else {
        toast.show({type: 'danger', title: '', content: 'Có gì đó không đúng!!!'});
      }
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center p-4 2xl:px-11">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames('mb-8 flex flex-col gap-2')}>
          <p className="flex w-full justify-start text-5xl text-blue-600">Đăng ký</p>
          <p className="text-base text-gray-500">Chào mừng bạn đến với chúng tôi</p>
        </div>
        <div className="mb-2 flex flex-col gap-2 lg:mb-8 xl:gap-4">
          <div>
            <InputPon
              className={`w-full rounded-lg ${
                errors.name && 'focus:border-red-600'
              } h-auto border border-gray-300 px-2 py-3 text-black`}
              {...register('name')}
              placeholder={'Trương Văn A'}
            />
            {errors.email && <Label className="mt-1 text-red-600" text={'Không được để trống họ và tên'} />}
          </div>
          <div>
            <InputPon
              className={`w-full rounded-lg ${
                errors.email && 'focus:border-red-600'
              } h-auto border border-gray-300 px-2 py-3 text-black`}
              {...register('email')}
              placeholder={'Example@gmail.com'}
            />
            {errors.email && <Label className="mt-1 text-red-600" text={'Không được để trống email'} />}
          </div>
          <div>
            <InputPassword restInput={register('password')} placeholder={'********'} errors={!!errors.password} />
            {errors.password && <Label className="mt-1 text-red-600" text={'Mật khẩu phải dài hơn 8 kí tự'} />}
          </div>
          <div>
            <InputPassword
              restInput={register('confirmPassword')}
              placeholder={'********'}
              errors={!!errors.confirmPassword}
            />
            {errors.confirmPassword && <Label className="mt-1 text-red-600" text={'Mật khẩu không khớp'} />}
          </div>
        </div>
        <button type="submit" className="w-full rounded-lg bg-blue-600 p-4 text-white" disabled={isSubmitting}>
          Đăng ký
        </button>
        <div className="mb-6 mt-6 flex w-full justify-center text-lg xl:mb-8">
          Bạn chưa có tài khoản?
          <p className="ml-1 cursor-pointer text-lg text-blue-600" onClick={() => route.push('/login')}>
            Đăng nhập
          </p>
        </div>
        <AuthButton />
      </form>
    </div>
  );
};

export default SignupForm;
