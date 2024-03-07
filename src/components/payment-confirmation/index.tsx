import React, {FC} from 'react';

import {usePlan} from '@/common/hooks/use-plan';

import PaymentDetail from '../payment/detail';
import PaymentForm from '../payment/payment-form';
import PaymentQR from '../payment/qr';

const PaymentConfirmation: FC = () => {
  const {plan} = usePlan();

  return (
    <div className="flex h-full items-start justify-between">
      <section className="w-[40%]"></section>

      <section className="flex h-full w-[60%] basis-1/2 flex-col gap-2">
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-2xl">Chi tiết</h1>
        <div className="flex h-full flex-1 items-start gap-6">
          <div className="flex h-full flex-col gap-4 xl:basis-2/3 xl:gap-6">
            <PaymentForm disabled={true} />
            <PaymentDetail days={plan.day} price={plan.price} />
          </div>
          <div className="flex h-full flex-col">
            <PaymentQR price={plan.price} qrSize={240} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentConfirmation;
