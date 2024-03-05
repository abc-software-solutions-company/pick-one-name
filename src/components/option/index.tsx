import {FC} from 'react';

import {useRandomNumber} from '@/common/hooks/use-random-number';
import {useSetting} from '@/common/hooks/use-setting';

import DefaultNumberOptions from './default-number';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

const RandomOption: FC = () => {
  const {min, max, setMin, setMax} = useRandomNumber();
  const {setIsSettingOpen} = useSetting();

  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-4 3xl:gap-8">
        <p className="text-center text-lg font-bold md:text-2xl 3xl:text-3xl">Chọn số ngẫu nhiên</p>
        <InputNumber label="Số nhỏ nhất" value={min} onChange={setMin} />
        <InputNumber label="Số lớn nhất (9.999.999)" value={max} onChange={setMax} />
      </div>
      <DefaultNumberOptions />
      <div className="flex items-center gap-2 self-stretch align-bottom lg:gap-4">
        <SettingButton onClick={() => setIsSettingOpen(true)} />
        <HideButton />
      </div>
    </>
  );
};

export default RandomOption;
