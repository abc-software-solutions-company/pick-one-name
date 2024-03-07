import {ChangeEvent, FC, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import cls from 'classnames';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import InputPon from '@/core-ui/input-pon';
import Label from '@/core-ui/label';

import {paymentValidator} from '@/modules/payment/validations/payment.validator';

import {usePlan} from '@/common/hooks/use-plan';

import {sendNotificationGoogleChat} from '@/common/utils/google-chat-webhook.util';

interface IPaymentFormProps {
  className?: string;
  submitNum?: number;
  disabled?: boolean;
}

type TFormPropsState = 'fullName' | 'email' | 'phoneNumber';

export interface IFormPaymentData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const defaultValues: IFormPaymentData = {email: '', fullName: '', phoneNumber: ''};

const PaymentForm: FC<IPaymentFormProps> = ({submitNum, disabled = false}) => {
  const form = useForm<IFormPaymentData>({resolver: zodResolver(paymentValidator), defaultValues});
  const route = useRouter();
  const {plan, customer, updateCustomer} = usePlan();
  const formRef = useRef<HTMLFormElement>(null);
  const {register, handleSubmit, formState} = form;
  const {errors} = formState;

  useEffect(() => {
    if (submitNum) {
      formRef.current?.requestSubmit();
    }
  }, [submitNum]);

  const handleChange = (type: TFormPropsState, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    updateCustomer({
      ...customer,
      [type]: value
    });
  };

  const onSendPaymentNotification = async (data: IFormPaymentData) => {
    const content = {
      time: `<b>Time</b>: ${new Date().toString()}`,
      fullName: `<b>User Name</b>: ${data.fullName}`,
      email: `<b>Email</b>: ${data.email}`,
      phoneNumber: `<b>SDT</b>: ${data.phoneNumber ?? 'Không có số điện thoại'}`,
      plan: `<b>Plan</b>: ${plan.day} ngày`
    };

    await sendNotificationGoogleChat({
      content: Object.values(content).join('\n'),
      title: 'Payment Notification',
      url: process.env.NEXT_PUBLIC_WEBHOOKS_PAYMENT as string
    });
  };

  const pay: SubmitHandler<IFormPaymentData> = async data => {
    onSendPaymentNotification(data);

    route.push('/confirm');
  };

  return (
    <form
      action=""
      className="flex flex-col gap-6 rounded-lg p-6 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]"
      ref={formRef}
      onSubmit={handleSubmit(pay)}
    >
      {!disabled && (
        <h3 className="text-center text-lg font-bold md:text-left md:text-xl">Hoàn thành thông tin đăng kí bên dưới</h3>
      )}
      <div className="flex flex-col gap-9">
        <div className="flex items-center">
          <label
            className={cls('min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4', {
              'xl:hidden 3xl:block': disabled
            })}
          >
            Tên đầy đủ {!disabled && <span className="text-red-600">*</span>}
          </label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon
              disabled={disabled}
              value={customer.fullName}
              className={`${errors.fullName && 'focus:border-red-600'} text-lg `}
              {...register('fullName', {
                onChange: e => handleChange('fullName', e)
              })}
            />
            {errors.fullName && <Label className="mt-1" color="danger" text={errors.fullName.message} />}
          </div>
        </div>
        <div className="flex items-center">
          <label
            className={cls('min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4', {
              'xl:hidden 3xl:block': disabled
            })}
          >
            Email {!disabled && <span className="text-red-600">*</span>}
          </label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon
              value={customer.email}
              disabled={disabled}
              type="email"
              className={`${errors.email && 'focus:border-red-600'} text-lg`}
              {...register('email', {
                value: customer.email,
                onChange: e => handleChange('email', e)
              })}
            />
            {errors.email && <Label className="mt-1" color="danger" text={errors.email.message} />}
          </div>
        </div>
        <div className="flex items-center">
          <label
            className={cls('min-w-[110px] whitespace-nowrap font-bold text-dark-950 md:basis-1/4', {
              'xl:hidden 3xl:block': disabled
            })}
          >
            Số điện thoại
          </label>
          <div className="flex flex-grow flex-col md:basis-3/4">
            <InputPon
              value={customer.phoneNumber}
              disabled={disabled}
              className={`text-lg`}
              {...register('phoneNumber', {
                value: customer.phoneNumber,
                onChange: e => handleChange('phoneNumber', e)
              })}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
