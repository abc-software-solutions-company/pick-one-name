import LayoutAuth from '@/layouts/auth-layout';

import AuthPage from '@/components/auth-page';

export default function PageLogin() {
  return (
    <div className="h-full w-full grow flex-row">
      <AuthPage />
    </div>
  );
}

PageLogin.Layout = LayoutAuth;
