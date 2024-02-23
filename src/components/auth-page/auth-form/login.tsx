import {ChangeEvent, useState} from 'react';

import AuthInput from '../ui/input-auth';
import {InputCates, InputConfig, loginInputs} from '../utils/const';

interface ILoginFormProps {
  className?: string;
}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleOnchange(type: InputCates, e: ChangeEvent<HTMLInputElement>) {
    switch (type) {
      case InputCates.EMAIL:
        setEmail(() => e?.target?.value);
        break;
      case InputCates.PASSWORD:
        setPassword(() => e?.target?.value);
        break;
    }
  }

  function handleInputValue(type: InputCates): string {
    switch (type) {
      case InputCates.EMAIL:
        return email;
      case InputCates.PASSWORD:
        return password;
    }
    return '';
  }

  return (
    <>
      {loginInputs.map(({title, type, placeholder, cate}: InputConfig) => (
        <AuthInput
          key={title}
          label={title}
          type={type}
          value={handleInputValue(cate)}
          placeholder={placeholder}
          onChange={(e: any) => handleOnchange(cate, e)}
        />
      ))}
    </>
  );
};

export default LoginForm;
