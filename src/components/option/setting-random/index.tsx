import React from 'react';
import {useSetting} from '@/hooks/use-setting';

import Icon from '@/core-ui/icon';

import RandomOption from '..';

import InputSetting from './input';

const SettingGame: React.FC = () => {
  const {isSettingOpen, setIsSettingOpen} = useSetting();

  return (
    <div className="flex flex-col">
      {isSettingOpen ? (
        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <Icon name="ico-arrow-left" className="h-6 w-6 cursor-pointer" onClick={() => setIsSettingOpen(false)} />
            <div className="flex flex-grow justify-center text-3xl font-bold">Cài đặt</div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <InputSetting label="Tiêu đề" placeholder="Random number..." iconEnd="pen-line" />
              <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" />
              <InputSetting label="Màu nền" placeholder="#1111111111" iconEnd="pen-line" />
              <InputSetting label="Màu chữ" placeholder="#0000000" iconEnd="pen-line" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="text-2xl font-medium text-black">Hình nền</div>
              <button className="flex w-full justify-center gap-4 rounded-lg border border-blue-600 px-6 py-3 text-lg text-blue-600">
                Tải ảnh lên
                <Icon name="ico-upload" />
              </button>
            </div>
          </div>
          <div>
            <button className="flex w-full justify-center gap-4 rounded-lg bg-blue-600 px-6 py-4 text-lg text-white">
              Hoàn thành
            </button>
          </div>
        </div>
      ) : (
        <RandomOption />
      )}
    </div>
  );
};

export default SettingGame;
