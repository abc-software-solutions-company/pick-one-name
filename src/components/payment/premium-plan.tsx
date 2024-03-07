import React, {FC} from 'react';
import cls from 'classnames';

import Icon from '@/core-ui/icon';

interface IProps {
  className?: string;
  price?: number;
  days?: number;
  isPicking?: boolean;
  onPick?: () => void;
}

const PremiumPlan: FC<IProps> = ({className, days = 1, price = 5000, isPicking, onPick}) => {
  const formattedPrice = price.toLocaleString('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return (
    <div
      className={cls(
        className,
        'flex cursor-pointer justify-center rounded-lg border-2 p-6 shadow-[0_0_2px_0_rgba(0,0,0,0.25)] hover:shadow-[0_0_6.3px_0_rgba(0,0,0,0.25)] active:border-2',
        {
          'border-blue-500': isPicking
        }
      )}
      onClick={onPick}
    >
      <div className="flex w-fit flex-col gap-1">
        <h2 className="text-2xl font-bold md:text-5xl xl:text-[44px]">Gói cao cấp</h2>
        <p className="whitespace-nowrap text-[28px] font-bold md:text-5xl xl:text-6xl">
          {formattedPrice} VND/{days}ngày
        </p>
        <div className="flex flex-col gap-6">
          <span className="flex gap-4 md:text-2xl">
            <Icon name="ico-check" />
            Đổi ảnh nền giao diện
          </span>
          <span className="flex gap-4 md:text-2xl">
            <Icon name="ico-check" />
            Được hỗ trợ từ đội ngũ
          </span>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
