import LayoutAuth from '@/layouts/auth-layout';

import LoginPage from '@/components/login-page';

export default function PageLogin() {
  return (
    <div className="h-full w-full grow flex-row">
      <LoginPage />
    </div>
  );
}

PageLogin.Layout = LayoutAuth;
