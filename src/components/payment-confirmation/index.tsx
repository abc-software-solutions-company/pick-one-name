import React, {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {usePlan} from '@/common/hooks/use-plan';

import {CONTACT_PHONE_NUMBER, FACEBOOK_PON_URL, WEBSTITE_EMAIL} from '@/common/constants';

import PaymentDetail from '../payment/detail';
import PaymentForm from '../payment/payment-form';
import PaymentQR from '../payment/qr';

const PaymentConfirmation: FC = () => {
  const {plan} = usePlan();

  return (
    <div className="flex h-full w-full flex-col items-center md:flex-col md:gap-12 xl:flex-row xl:items-start xl:justify-between">
      <section className="mb-12 flex w-full flex-col items-center md:w-[60%] xl:w-[40%] xl:items-start">
        <div className="flex w-full justify-center">
          <div className="relative h-[200px] w-[200px] md:h-[350px] md:w-[350px] xl:h-[350px] xl:w-[350px]">
            <Image src="/payment_confirmation.svg" alt="svg" fill />
          </div>
        </div>

        <h1 className="text-gray-950 font-['Nunito'] text-xl font-bold leading-[52px] md:text-3xl xl:text-4xl">
          Đang chờ xác nhận thanh toán!
        </h1>
        <p className="items-center font-[Nunito] text-base font-normal leading-normal text-black md:text-lg xl:text-xl">
          Cảm ơn bạn đã lựa chọn gói cao cấp của Lucky Wheel.
        </p>
        <p className="items-center font-[Nunito] text-base font-normal leading-normal text-black md:text-lg xl:text-xl">
          Chúng tôi sẽ xác minh và nâng cấp tài khoản của bạn trong vòng 12 giờ.
        </p>
        <p className="mb-4 items-center font-[Nunito] text-base font-normal leading-normal text-black md:text-lg xl:text-xl">
          Hãy kiên nhẫn và chờ đợi thông báo của chúng tôi.
        </p>

        <div className="font-['Nunito'] text-base font-bold leading-normal text-black md:text-lg xl:text-xl">
          Nếu gặp bất kỳ khó khăn nào, hãy liên hệ với chúng tôi để được trợ giúp
        </div>
        <div className="font-['Nunito'] text-base font-bold leading-9 text-black md:text-lg xl:text-3xl">
          {CONTACT_PHONE_NUMBER}
        </div>
        <div className="font-['Nunito'] text-base font-normal leading-normal text-black md:text-lg xl:text-xl">
          {WEBSTITE_EMAIL}
        </div>
        <Link
          href={FACEBOOK_PON_URL}
          className="font-['Nunito'] text-base font-bold leading-normal text-black underline md:text-lg xl:text-xl"
        >
          Phần Mền Vòng Quay May Mắn
        </Link>
      </section>

      <section className="flex h-full w-full grow basis-1/2 flex-col items-center gap-2 xl:w-[60%]">
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-2xl">Chi tiết</h1>
        <div className="flex h-full w-full flex-col items-start gap-6 xl:flex-row">
          <div className="flex h-full w-full flex-col gap-4 xl:basis-2/3 xl:gap-6">
            <PaymentForm disabled={true} />
            <PaymentDetail days={plan.day} price={plan.price} />
          </div>
          <div className="flex h-full w-full flex-col">
            <PaymentQR price={plan.price} qrSize={240} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentConfirmation;
