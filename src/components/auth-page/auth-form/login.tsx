import {ChangeEvent, useState} from 'react';

import AuthInput from '../ui/input-auth';
import {InputCategories, InputConfig, loginInputs} from '../utils/const';

interface ILoginFormProps {
  className?: string;
}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleOnchange(type: InputCategories, e: ChangeEvent<HTMLInputElement>) {
    switch (type) {
      case InputCategories.EMAIL:
        setEmail(() => e?.target?.value);
        break;
      case InputCategories.PASSWORD:
        setPassword(() => e?.target?.value);
        break;
    }
  }

  function handleInputValue(type: InputCategories): string {
    switch (type) {
      case InputCategories.EMAIL:
        return email;
      case InputCategories.PASSWORD:
        return password;
    }
    return '';
  }

  return (
    <>
      {loginInputs.map(({title, type, placeholder, category}: InputConfig) => (
        <AuthInput
          key={title}
          label={title}
          type={type}
          value={handleInputValue(category)}
          placeholder={placeholder}
          onChange={(e: any) => handleOnchange(category, e)}
        />
      ))}
    </>
  );
};

export default LoginForm;
