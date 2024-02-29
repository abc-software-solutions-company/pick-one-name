import LayoutAuth from '@/layouts/auth-layout';

import SignupPage from '@/components/signup-page';

export default function PageSignup() {
  return (
    <div className="h-full w-full">
      <SignupPage />
    </div>
  );
}

PageSignup.Layout = LayoutAuth;
