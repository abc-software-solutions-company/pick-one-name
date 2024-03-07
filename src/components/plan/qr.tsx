import {FC} from 'react';
import Image from 'next/image';

import {QR_BANK_ACCOUNT, QR_BANK_NAME, QR_BANK_NUMBER} from '@/common/constants';

import Copy from '../copy';

interface IPaymentQRProps {
  price?: number;
}

const PaymentQR: FC<IPaymentQRProps> = ({price = 5000}) => {
  const formattedPrice = price.toLocaleString('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg p-6 py-6 shadow-[0_0_2px_0_rgba(0,0,0,0.25)]">
      <h3 className="text-center text-xl font-bold">Hãy thanh toán {formattedPrice} VND cho tài khoản sau</h3>
      <div className="relative h-72 w-72">
        <Image src="/images/qr-code-payment.png" alt="qr" fill />
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-bold">{QR_BANK_NAME}</span>
        <p>
          Tên tài khoản: <span className="font-bold"> {QR_BANK_ACCOUNT}</span>
        </p>
        <div className="flex gap-4">
          <p>
            Số tài khoản: <span className="font-bold">{QR_BANK_NUMBER}</span>
          </p>
          <Copy value={QR_BANK_NUMBER} />
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;
