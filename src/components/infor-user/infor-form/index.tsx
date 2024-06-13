import InputUpdateUserProfile from './input';

const InforForm = () => {
  return (
    <div className="flex w-full shrink grow flex-col xl:gap-8 xl:py-8">
      <InputUpdateUserProfile label="Tên" placeholder="Nguyễn Văn A" type="text" />
      <InputUpdateUserProfile label="Mật khẩu" placeholder="********" type="password" />
      <div className="flex justify-end">
        <button className="flex h-9 items-center justify-end gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-neutral-50 md:h-12 md:text-lg xl:h-14 xl:text-lg">
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
};
export default InforForm;
