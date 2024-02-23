import LayoutAuth from '@/layouts/auth-layout';

import AuthPage from '@/components/auth-page';

export default function SignUpPage() {
  return (
    <div className="h-full w-full grow flex-row">
      <AuthPage path="/signup" />
    </div>
  );
}

SignUpPage.Layout = LayoutAuth;
