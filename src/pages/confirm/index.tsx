import LayoutDefault from '@/layouts/default';

import PaymentConfirmation from '@/components/payment-confirmation';

export default function PageConfirm() {
  return (
    <div className={'h-full w-full grow flex-col px-5 py-8 lg:px-[50px] 3xl:px-[100px] 3xl:py-16'}>
      <PaymentConfirmation />
    </div>
  );
}

PageConfirm.Layout = LayoutDefault;
