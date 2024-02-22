import LoginForm from './login-form';
import LoginWelcome from './login-welcom';

const LoginPage: React.FC = () => {
  return (
    <div className="h-full w-full gap-8 lg:flex lg:pr-[100px]">
      <div className="lg:h-full lg:flex-grow lg:basis-2/3">
        <LoginWelcome />
      </div>
      <div className="lg:h-full lg:flex-shrink lg:basis-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
