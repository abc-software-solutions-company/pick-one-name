import LayoutAuth from '@/layouts/auth-layout';

import AuthPage from '@/components/auth-page';

export default function LoginPage() {
  return (
    <div className="h-full w-full grow flex-row">
      <AuthPage path="/login" />
    </div>
  );
}

LoginPage.Layout = LayoutAuth;
