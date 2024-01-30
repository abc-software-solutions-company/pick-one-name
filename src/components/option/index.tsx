import cls from 'classnames';

import {useRandomNumber} from '@/hooks/use-random-number';
import {useSetting} from '@/hooks/use-setting';

import DefaultNumberOptions from './default-number';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';
import SettingGame from './setting-random';

interface IRandomOption {
  className?: string;
}

const RandomOption: React.FC<IRandomOption> = ({className}) => {
  const {min, max, setMin, setMax} = useRandomNumber();
  const {isSettingOpen, setIsSettingOpen} = useSetting();

  return (
    <div
      className={cls(
        className,
        'flex flex-col gap-4 rounded-2xl border border-gray-300 px-2 py-5 md:p-10 lg:py-10 lg:px-8 3xl:gap-8',
        {'shadow-sm': isSettingOpen}
      )}
    >
      {isSettingOpen ? (
        <SettingGame />
      ) : (
        <>
          <div className="flex flex-col gap-2 lg:gap-4 3xl:gap-8">
            <p className="text-center text-2xl font-bold 3xl:text-3xl">Chọn số ngẫu nhiên</p>
            <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
            <InputNumber label="Tối đa (max 9.999.999)" value={max} onChange={setMax} />
          </div>
          <DefaultNumberOptions />
          <div className="flex items-center gap-2 self-stretch align-bottom lg:gap-4">
            <SettingButton onClick={() => setIsSettingOpen(true)} />
            <HideButton />
          </div>
        </>
      )}
    </div>
  );
};

export default RandomOption;
