import {FC} from 'react';

interface IPaymentDetailProps {
  price?: number;
  days?: number;
}

const PaymentDetail: FC<IPaymentDetailProps> = ({price = 5000, days = 3}) => {
  const formattedPrice = price.toLocaleString('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return (
    <div className="flex w-full grow flex-col justify-center gap-4 rounded-lg p-6 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]">
      <div className="flex w-full">
        <p className="flex flex-col md:basis-1/4">
          <span className="min-w-[110px] whitespace-nowrap font-bold">Gói premium</span>
          <span>{days} ngày</span>
        </p>
        <p className="font-bold">{formattedPrice} VND</p>
      </div>
      <div className="flex">
        <span className="min-w-[110px] whitespace-nowrap font-bold md:basis-1/4">Tổng chi phí</span>
        <span className="font-bold">{formattedPrice} VND</span>
      </div>
    </div>
  );
};

export default PaymentDetail;
