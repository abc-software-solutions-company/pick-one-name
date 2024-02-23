export enum InputCategories {
  EMAIL = 'email',
  PASSWORD = 'password',
  NAME = 'name',
  RE_PASSWORD = 're-password'
}

export interface InputConfig {
  title: string;
  type: string;
  placeholder: string;
  cate: InputCategories;
}

export const loginInputs: InputConfig[] = [
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    cate: InputCategories.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCategories.PASSWORD
  }
];

export const signupInputs: InputConfig[] = [
  {
    title: 'Họ và tên',
    type: 'text',
    placeholder: 'Your full name',
    cate: InputCategories.NAME
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    cate: InputCategories.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCategories.PASSWORD
  },
  {
    title: 'Nhập lại mật khẩu',
    type: 'password',
    placeholder: '*****************',
    cate: InputCategories.RE_PASSWORD
  }
];
