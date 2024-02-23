import {ChangeEvent, useState} from 'react';

import AuthInput from '../ui/input-auth';
import {InputCategories, InputConfig, signupInputs} from '../utils/const';

interface ISignUpFormProps {
  className?: string;
}

const SignUpForm: React.FC<ISignUpFormProps> = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  function handleOnchange(type: InputCategories, e: ChangeEvent<HTMLInputElement>) {
    switch (type) {
      case InputCategories.EMAIL:
        setEmail(() => e?.target?.value);
        break;
      case InputCategories.NAME:
        setName(() => e?.target?.value);
        break;
      case InputCategories.PASSWORD:
        setPassword(() => e?.target?.value);
        break;
      case InputCategories.RE_TYPE_PASSWORD:
        setRePassword(() => e?.target?.value);
        break;
    }
  }

  function handleInputValue(type: InputCategories): string {
    switch (type) {
      case InputCategories.EMAIL:
        return email;
      case InputCategories.NAME:
        return name;
      case InputCategories.PASSWORD:
        return password;
      case InputCategories.RE_TYPE_PASSWORD:
        return rePassword;
    }
  }

  return (
    <>
      {signupInputs.map(({title, type, placeholder, category}: InputConfig) => (
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

export default SignUpForm;
