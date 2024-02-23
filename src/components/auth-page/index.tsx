import AuthForm from './auth-form';
import AuthWelcome from './auth-welcom';

const AuthPage: React.FC = () => {
  return (
    <div className="h-full w-full gap-8 lg:flex 2xl:pr-[100px]">
      <div className="lg:h-full lg:flex-grow lg:basis-2/3">
        <AuthWelcome />
      </div>
      <div className="lg:h-full lg:flex-shrink lg:basis-1/3">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
