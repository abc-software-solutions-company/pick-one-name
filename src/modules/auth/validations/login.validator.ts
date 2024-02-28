import * as zod from 'zod';

export const SignInValidator = zod.object({
  email: zod.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),

  password: zod.string().min(1, 'Vui lòng nhập mật khẩu')
});
