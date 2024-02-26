import SocialLoginButton from '@/components/login-page/login-form/social-input-button';

const AuthButton = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <SocialLoginButton label="Đăng nhập bằng Google" src="/images/logo-google.png" authType="google" />
      <SocialLoginButton label="Đăng nhập bằng Facebook" src="/images/logo-facebook.png" authType="facebook" />
    </div>
  );
};
export default AuthButton;
