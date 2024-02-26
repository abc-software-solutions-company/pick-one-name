import React from 'react';

import Icon from '@/core-ui/icon';

import {useGlobal} from '@/common/hooks/use-global';
import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import CustomSettingForm from './custom-setting-form';

const SettingForm: React.FC = () => {
  const {setIsSettingOpen} = useSetting();
  const {setBGImage} = useGlobal();
  const {upload} = useUpload();

  const handleCloseSettingModal = () => {
    setIsSettingOpen(false);
  };

  const handleUpFile = async (file: File | FileList | null | undefined) => {
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
      <div>
        <button
          className="flex w-full justify-center gap-4 rounded-lg bg-blue-600 px-6 py-4 text-lg text-white"
          onClick={handleCloseSettingModal}
        >
          Hoàn thành
        </button>
      </div>
    </div>
  );
};

export default SettingForm;
