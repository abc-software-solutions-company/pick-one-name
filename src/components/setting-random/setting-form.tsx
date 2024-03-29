import React from 'react';
import {useRouter} from 'next/router';

import Icon from '@/core-ui/icon';

import {useGlobal} from '@/common/hooks/use-global';
import {useSetting} from '@/common/hooks/use-setting';

import ConfirmBox from '../modals/modal-confirm';

import CustomSettingForm from './custom-setting-form';

const SettingForm: React.FC = () => {
  const route = useRouter();
  const {setIsSettingOpen, reset} = useSetting();
  const {confirm, configConfirmBox} = useGlobal();

  const handleCloseSettingModal = () => {
    setIsSettingOpen(false);
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center">
        <Icon name="ico-arrow-left" className="h-6 w-6 cursor-pointer" onClick={() => setIsSettingOpen(false)} />
        <div className="flex flex-grow justify-center text-lg font-bold md:text-2xl 3xl:text-[32px]">Tùy chỉnh</div>
      </div>
      <div className="flex grow flex-col gap-2 xl:gap-3">
        <CustomSettingForm />
      </div>
      <div className="flex w-full items-center gap-2">
        <button
          className="flex h-9 grow items-center justify-center gap-4 rounded-lg bg-blue-600 px-6 py-4 text-sm text-white md:h-12 lg:h-[50px] lg:text-xl xl:text-xl"
          onClick={handleCloseSettingModal}
        >
          Hoàn thành
        </button>
        <button
          className="flex basis-1/3 items-center justify-center gap-2 py-2 px-3 text-sm text-black md:px-6 md:py-4 md:text-lg lg:text-xl xl:text-xl"
          onClick={reset}
        >
          Đặt lại
        </button>
      </div>
      <ConfirmBox
        open={confirm.show}
        message={confirm.message}
        buttonLeftText="Nâng cấp"
        headerText="Thông báo"
        onYes={() => route.push('/plan')}
        onNo={() => configConfirmBox({show: false, message: ''})}
      />
    </div>
  );
};

export default SettingForm;
