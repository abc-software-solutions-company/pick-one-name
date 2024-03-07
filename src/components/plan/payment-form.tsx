import {FC, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import InputPon from '@/core-ui/input-pon';
import Label from '@/core-ui/label';

import {paymentValidator} from '@/modules/payment/validations/payment.validator';

interface IPaymentFormProps {
  className?: string;
  submitNum?: number;
}

export interface IFormPaymentData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const defaultValues: IFormPaymentData = {email: '', fullName: '', phoneNumber: ''};

const PaymentForm: FC<IPaymentFormProps> = ({submitNum}) => {
  const form = useForm<IFormPaymentData>({resolver: zodResolver(paymentValidator), defaultValues});
  const route = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const {register, handleSubmit, formState} = form;
  const {errors} = formState;

  useEffect(() => {
    if (submitNum) {
      formRef.current?.requestSubmit();
      console.log('🚀 ~ useEffect ~ isSubmit:::', submitNum);
    }
  }, [submitNum]);

  const pay: SubmitHandler<IFormPaymentData> = async () => {
    route.push('/');
  };

  return (
    <form
      action=""
      className="flex flex-col gap-6 rounded-lg p-6 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]"
      ref={formRef}
      onSubmit={handleSubmit(pay)}
    >
      <h3 className="text-center text-lg font-bold md:text-left md:text-xl">Hoàn thành thông tin đăng kí bên dưới</h3>
      <div className="flex flex-col gap-9">
        <div className="flex items-center">
          <label className="min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4">Tên đầy đủ</label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon className={`${errors.fullName && 'focus:border-red-600'} text-lg `} {...register('fullName')} />
            {errors.fullName && <Label className="mt-1 text-red-600" text={errors.fullName.message} />}
          </div>
        </div>
        <div className="flex items-center">
          <label className="min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4">Email</label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon
              type="email"
              className={`${errors.email && 'focus:border-red-600'} text-lg`}
              {...register('email')}
            />
            {errors.email && <Label className="mt-1 text-red-600" text={errors.email.message} />}
          </div>
        </div>
        <div className="flex items-center">
          <label className="min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4">Số điện thoại</label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon
              className={`${errors.phoneNumber && 'focus:border-red-600'} text-lg`}
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && <Label className="mt-1 text-red-600" text={errors.phoneNumber.message} />}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
