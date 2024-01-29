import LoginPage from '@/components/login-page';
import LayoutAuth from '@/layouts/auth-layout';

export default function PageLogin() {
  return (
    <div className="h-full w-full grow flex-row">
      <LoginPage />
    </div>
  );
}

PageLogin.Layout = LayoutAuth;
