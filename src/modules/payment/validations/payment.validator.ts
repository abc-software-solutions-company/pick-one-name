import * as zod from 'zod';

export const paymentValidator = zod.object({
  email: zod.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  fullName: zod.string().min(1, 'Vui lòng nhập họ tên'),
  phoneNumber: zod
    .string()
    .min(10, 'Số điện thoại không hợp lệ')
    .max(11, 'Số điện thoại không hợp lệ')
    .regex(/^(0|\+84)(\d{9,10})$/g, 'Số điện thoại không hợp lệ')
});
