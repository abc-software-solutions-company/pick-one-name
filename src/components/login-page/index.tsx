import LoginForm from './login-form';
import LoginWelcome from './login-welcom';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-full w-full gap-8 pr-[100px]">
      <div className="h-full basis-2/3">
        <LoginWelcome />
      </div>
      <div className="h-full basis-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
