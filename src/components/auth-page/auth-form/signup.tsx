import {ChangeEvent, useState} from 'react';

import AuthInput from '../ui/input-auth';
import {InputCates, InputConfig, signupInputs} from '../utils/const';

interface ISignupFormProps {
  className?: string;
}

const SignupForm: React.FC<ISignupFormProps> = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  function handleOnchange(type: InputCates, e: ChangeEvent<HTMLInputElement>) {
    switch (type) {
      case InputCates.EMAIL:
        setEmail(() => e?.target?.value);
        break;
      case InputCates.NAME:
        setName(() => e?.target?.value);
        break;
      case InputCates.PASSWORD:
        setPassword(() => e?.target?.value);
        break;
      case InputCates.RE_PASSWORD:
        setRePassword(() => e?.target?.value);
        break;
    }
  }

  function handleInputValue(type: InputCates): string {
    switch (type) {
      case InputCates.EMAIL:
        return email;
      case InputCates.NAME:
        return name;
      case InputCates.PASSWORD:
        return password;
      case InputCates.RE_PASSWORD:
        return repassword;
    }
  }

  return (
    <>
      {signupInputs.map(({title, type, placeholder, cate}: InputConfig) => (
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

export default SignupForm;
