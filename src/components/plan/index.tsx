import React, {FC, useState} from 'react';

import {usePlan} from '@/common/hooks/use-plan';

import PaymentDetail from './detail';
import PaymentInstruction from './instruction';
import PaymentForm from './payment-form';
import PremiumPlan from './premium-plan';
import PaymentQR from './qr';

const Plan: FC = () => {
  const {plan, updatePlan} = usePlan();
  const [submit, setSubmit] = useState(0);

  return (
    <div className="flex flex-col gap-12 xl:gap-16">
      <section className="flex w-full flex-col items-center gap-8">
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-5xl">Chỉnh sửa vòng quay theo ý của bạn</h1>
        <PaymentInstruction />
      </section>

      <section className="flex w-full flex-col gap-6">
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-5xl">Bước 1: Chọn gói</h1>
        <div className="flex flex-col gap-6 xl:flex-row">
          <PremiumPlan
            className="xl:basis-1/2"
            days={1}
            price={5000}
            onPick={() => updatePlan({day: 1, price: 5000})}
            isPicking={plan.day === 1 && plan.price === 5000}
          />
          <PremiumPlan
            className="xl:basis-1/2"
            days={3}
            price={10000}
            onPick={() => updatePlan({day: 3, price: 10000})}
            isPicking={plan.day === 3 && plan.price === 10000}
          />
        </div>
      </section>

      <section className="flex w-full flex-col gap-8">
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-5xl">Bước 2: Thanh toán</h1>
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col gap-4 xl:basis-2/3 xl:gap-6">
            <PaymentForm submitNum={submit} />
            <PaymentDetail days={plan.day} price={plan.price} />
          </div>
          <div className="xl:basis-1/3">
            <PaymentQR price={plan.price} />
          </div>
        </div>
        <button
          className="w-full rounded bg-blue-600 py-3 px-6 text-lg text-zinc-50 xl:p-4"
          onClick={() => setSubmit(submit + 1)}
        >
          Tôi đã thanh toán
        </button>
      </section>
    </div>
  );
};

export default Plan;
