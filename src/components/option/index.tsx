import cls from 'classnames';

import {useRandomNumber} from '@/hooks/use-random-number';
import {useSetting} from '@/hooks/use-setting';

import OptionMenu from './option-menu';
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
        'flex flex-col gap-4 rounded-2xl border border-gray-300 px-2 py-5 md:p-10 lg:py-10 lg:px-8 3xl:gap-8',
        {'shadow-[0_0_4px_0_#797979]': isSettingOpen},
        className
      )}
    >
      {isSettingOpen ? (
        <SettingGame />
      ) : (
        <OptionMenu min={min} max={max} setMin={setMin} setMax={setMax} setIsSettingOpen={setIsSettingOpen} />
      )}
    </div>
  );
};

export default RandomOption;
