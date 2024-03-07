import {FC} from 'react';

const PaymentInstruction: FC = () => {
  return (
    <>
      <p className="w-full text-center md:font-semibold">
        Để tận hưởng đầy đủ tính năng quay số may mắn cùng các ưu đãi đặc biệt, bạn chỉ cần thực hiện một số bước đơn
        giản:
      </p>
      <ul className="flex list-inside list-disc flex-col gap-2 md:text-lg xl:text-xl">
        <li className="flex gap-1">
          <span className="whitespace-nowrap font-bold">- Bước 1: </span>
          Đầu tiên, hãy tạo tài khoản của bạn và đăng nhập để bắt đầu trải nghiệm.
        </li>
        <li className="flex gap-1">
          <span className="whitespace-nowrap font-bold">- Bước 2: </span>
          Tiếp theo, chọn gói dịch vụ phù hợp với nhu cầu của bạn - gói 1 ngày hoặc 3 ngày, và điền đầy đủ thông tin cần
          thiết. Lưu ý rằng email bạn sử dụng để đăng nhập phải chính xác.
        </li>
        <li className="flex gap-1">
          <span className="whitespace-nowrap font-bold">- Bước 3: </span>
          Thực hiện chuyển khoản vào tài khoản được chỉ định, với nội dung chuyển khoản là địa chỉ email đăng ký của bạn
        </li>
        <li className="flex gap-1">
          {' '}
          <span className="whitespace-nowrap font-bold">- Bước 4: </span>
          Sau khi chúng tôi nhận được thanh toán, quy trình nâng cấp tài khoản sẽ được hoàn tất trong vòng tối đa 12
          giờ.
        </li>
      </ul>
    </>
  );
};

export default PaymentInstruction;
