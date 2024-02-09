import cls from 'classnames';

import {useRandomNumber} from '@/hooks/use-random-number';

import DefaultNumberOptions from './default-number';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

interface IRandomOption {
  className: string;
}

const RandomOption = ({className}: IRandomOption) => {
  const {min, max, setMin, setMax} = useRandomNumber();

  return (
    <div
      className={cls(
        className,
        'flex flex-col gap-4 rounded-2xl border border-gray-300 px-2 py-5 md:p-10 lg:px-8 lg:py-10 3xl:gap-8'
      )}
    >
      <div className="flex flex-col gap-2 lg:gap-4 3xl:gap-8">
        <p className="text-center text-2xl font-bold 3xl:text-3xl">Chọn số ngẫu nhiên</p>
        <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
        <InputNumber label="Tối đa (max 9.999.999)" value={max} onChange={setMax} />
      </div>
      <DefaultNumberOptions />
      <div className="flex items-center gap-2 self-stretch align-bottom md:gap-4">
        <SettingButton />
        <HideButton />
      </div>
    </div>
  );
};

export default RandomOption;
