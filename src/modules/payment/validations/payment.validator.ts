import * as zod from 'zod';

export const paymentValidator = zod.object({
  email: zod.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  fullName: zod.string().min(1, 'Vui lòng nhập họ tên')
});
