import LayoutAuth from '@/layouts/auth-layout';

import SignupPage from '@/components/signup-page';

export default function PageSignup() {
  return (
    <div className="h-full w-full grow flex-row">
      <SignupPage />
    </div>
  );
}

PageSignup.Layout = LayoutAuth;
