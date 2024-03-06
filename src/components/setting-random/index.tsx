import {FC, ReactNode} from 'react';

import {useSetting} from '@/common/hooks/use-setting';

import SettingForm from './setting-form';

interface ISettingGame {
  partial?: ReactNode;
}

const SettingGame: FC<ISettingGame> = ({partial}) => {
  const {isSettingOpen} = useSetting();

  return <>{isSettingOpen ? <SettingForm /> : partial}</>;
};

export default SettingGame;
