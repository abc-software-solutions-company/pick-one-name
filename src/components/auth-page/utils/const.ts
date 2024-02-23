export enum InputCates {
  EMAIL = 'email',
  PASSWORD = 'password',
  NAME = 'name',
  RE_PASSWORD = 're-password'
}

export interface InputConfig {
  title: string;
  type: string;
  placeholder: string;
  cate: InputCates;
}

export const loginInputs: InputConfig[] = [
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    cate: InputCates.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCates.PASSWORD
  }
];

export const signupInputs: InputConfig[] = [
  {
    title: 'Họ và tên',
    type: 'text',
    placeholder: 'Your full name',
    cate: InputCates.NAME
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    cate: InputCates.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCates.PASSWORD
  },
  {
    title: 'Nhập lại mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCates.RE_PASSWORD
  }
];
