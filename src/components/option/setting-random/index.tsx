import React from 'react';

import {useSetting} from '@/common/hooks/use-setting';

import RandomOption from '..';

import SettingForm from './setting-form';

const SettingGame: React.FC = () => {
  const {isSettingOpen} = useSetting();

  return <>{isSettingOpen ? <SettingForm /> : <RandomOption />}</>;
};

export default SettingGame;
