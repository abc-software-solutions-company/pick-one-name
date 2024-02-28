import * as zod from 'zod';

import {MAX_PASSWORD, MAX_USER_ENTER_NAME} from '@/common/constants/user.constant';

export const SignUpValidator = zod
  .object({
    name: zod.string().min(1, 'name_required').max(MAX_USER_ENTER_NAME, 'max_name'),
    email: zod.string().email('required_email'),
    password: zod.string().min(8, 'password_at_least_8_characters').max(MAX_PASSWORD, 'max_password'),
    confirmPassword: zod.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'password_does_not_match',
    path: ['confirmPassword']
  });
