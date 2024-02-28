import React from 'react';

import Icon from '@/core-ui/icon';

import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import CustomSettingForm from './custom-setting-form';

const SettingForm: React.FC = () => {
  const {setIsSettingOpen, Reset, setBGImage} = useSetting();
  const {upload} = useUpload();

  const handleCloseSettingModal = () => {
    setIsSettingOpen(false);
  };

  const handleUpFile = async (file: File | FileList | null | undefined) => {
    if (file === null) {
      setBGImage('');
      localStorage.removeItem('backgroundImage');
      return;
    }
    const resp = await upload(file as File, 1).then(item => {
      return item;
    });
    if (resp?.url) {
      setBGImage(resp?.url);
      localStorage.setItem('backgroundImage', resp?.url);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <Icon name="ico-arrow-left" className="h-6 w-6 cursor-pointer" onClick={() => setIsSettingOpen(false)} />
        <div className="flex flex-grow justify-center text-lg font-bold md:text-2xl 3xl:text-[32px]">Cài đặt</div>
      </div>
      <div className="flex flex-col gap-2 xl:gap-3">
        <CustomSettingForm />
        <div className="flex flex-col gap-1 xl:gap-2">
          <label className="font-bold text-black md:text-lg xl:text-xl 3xl:text-2xl">Hình nền</label>
          <div>
            <input
              hidden
              accept="image/*"
              id="file-upload"
              type="file"
              onChange={e => {
                handleUpFile(e.currentTarget?.files?.[0]);
              }}
            />
            <label
              htmlFor="file-upload"
              className="flex w-full cursor-pointer justify-center gap-4 rounded-lg border border-blue-600 px-6 py-3 text-blue-600 md:text-lg xl:text-xl 3xl:text-2xl"
            >
              Tải ảnh lên
              <Icon name="ico-upload" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <button
          className="flex grow justify-center gap-4 rounded-lg bg-blue-600 px-6 py-4 text-white md:text-lg xl:text-xl 3xl:text-2xl"
          onClick={handleCloseSettingModal}
        >
          Hoàn thành
        </button>
        <button
          className="flex basis-1/3 items-center justify-center gap-2 py-2 px-3 text-black md:px-8 md:py-4 md:text-lg
      xl:text-xl 3xl:text-2xl"
          onClick={Reset}
        >
          Đặt lại
        </button>
      </div>
    </div>
  );
};

export default SettingForm;
