import React from 'react';

import Icon from '@/core-ui/icon';

import {
  DEFAULT_WHEEL_BG_COLOR,
  DEFAULT_WHEEL_TEXT_COLOR,
  TITLE
} from '@/components/common/constant/wheelColor.constant';

import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import CustomSettingForm from './custom-setting-form';

const SettingForm: React.FC = () => {
  const {setIsSettingOpen, setTitle, setBgColor, setTextColor} = useSetting();
  const {upload} = useUpload();

  const handleCloseSettingModal = () => {
    setIsSettingOpen(false);
  };

  const handleReset = () => {
    setTitle(TITLE);
    setBgColor(DEFAULT_WHEEL_BG_COLOR);
    setTextColor(DEFAULT_WHEEL_TEXT_COLOR);
  };

  const handleUpFile = async (file: File | FileList | null | undefined) => {
    return await upload(file as File, 1).then(item => {
      console.log('🚀🚀🚀 -> returnawaitupload -> item:::', item);
      return item;
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <Icon name="ico-arrow-left" className="h-6 w-6 cursor-pointer" onClick={() => setIsSettingOpen(false)} />
        <div className="flex flex-grow justify-center text-3xl font-bold">Cài đặt</div>
      </div>
      <div>
        <CustomSettingForm />
        <div className="mt-3 flex flex-col gap-2">
          <div className="text-2xl font-medium text-black">Hình nền</div>
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
              className="flex w-full cursor-pointer justify-center gap-4 rounded-lg border border-blue-600 px-6 py-3 text-lg text-blue-600"
            >
              Tải ảnh lên
              <Icon name="ico-upload" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <button
          className=" flex grow justify-center gap-4 rounded-lg bg-blue-600 px-6 py-4 text-lg text-white"
          onClick={handleCloseSettingModal}
        >
          Hoàn thành
        </button>
        <button
          className=" flex basis-1/3 items-center justify-center gap-2 py-2 px-3 text-sm text-black
      md:px-8 md:py-4 md:text-xl md:font-medium"
          onClick={handleReset}
        >
          Đặt lại
        </button>
      </div>
    </div>
  );
};

export default SettingForm;
