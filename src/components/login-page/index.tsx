import AuthWelcome from '../common/auth-page/auth-welcome';

import LoginForm from './login-form';

const LoginPage: React.FC = () => {
  return (
    <div className="h-full w-full gap-8 lg:flex 2xl:pr-[100px]">
      <div className="lg:h-full lg:flex-grow lg:basis-2/3">
        <AuthWelcome />
      </div>
      <div className="lg:h-full lg:flex-shrink lg:basis-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
