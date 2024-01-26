interface ILoginWelcomeProps {
  className?: string;
}

const LoginWelcome: React.FC<ILoginWelcomeProps> = () => {
  return (
    <div className="flex w-full flex-col">
      <p className="bg-gray-400">Welcome Login</p>
    </div>
  );
};
export default LoginWelcome;
