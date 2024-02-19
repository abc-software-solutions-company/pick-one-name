import React from 'react';
import {useSetting} from '@/hooks/use-setting';

import RandomOption from '..';

import SettingForm from './setting-form';

const SettingGame: React.FC = () => {
  const {isSettingOpen} = useSetting();

  return <div className="flex flex-col">{isSettingOpen ? <SettingForm /> : <RandomOption />}</div>;
};

export default SettingGame;
