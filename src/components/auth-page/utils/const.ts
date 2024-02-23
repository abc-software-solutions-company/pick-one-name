export enum InputCategories {
  EMAIL = 'email',
  PASSWORD = 'password',
  NAME = 'name',
  RE_PASSWORD = 'reTypePassword'
}

export interface InputConfig {
  title: string;
  type: string;
  placeholder: string;
  category: InputCategories;
}

export const loginInputs: InputConfig[] = [
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    category: InputCategories.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    category: InputCategories.PASSWORD
  }
];

export const signupInputs: InputConfig[] = [
  {
    title: 'Họ và tên',
    type: 'text',
    placeholder: 'Your full name',
    category: InputCategories.NAME
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Example@gmail.com',
    category: InputCategories.EMAIL
  },
  {
    title: 'Mật khẩu',
    type: 'password',
    placeholder: '*****************',
    category: InputCategories.PASSWORD
  },
  {
    title: 'Nhập lại mật khẩu',
    type: 'password',
    placeholder: '*****************',
    category: InputCategories.RE_PASSWORD
  }
];
