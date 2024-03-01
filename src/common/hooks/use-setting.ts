import {create} from 'zustand';

import {DEFAULT_SETTING} from '../constants';
import {TDefaultSetting} from '../types';
import {getLocal, removeLocal, setLocal} from '../utils';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  bgColor: string;
  title: string;
  textColor: string;
  bgImage: string;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  setBgColor: (bgColor: string) => void;
  setTitle: (value: string) => void;
  setTextColor: (value: string) => void;
  setBGImage: (bgImage: string) => void;
  updateLocal: () => void;
  loadLocal: () => void;
  reset: () => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  bgColor: DEFAULT_SETTING.BG_COLOR,
  title: DEFAULT_SETTING.TITLE,
  textColor: DEFAULT_SETTING.TEXT_COLOR,
  bgImage: ''
};

export const useSetting = create<State & Actions>()((set, get) => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  },
  setIsSettingOpen(isSettingOpen: boolean) {
    set({isSettingOpen});
  },
  setBgColor(bgColor: string) {
    set({bgColor});
  },
  setTitle(title: string) {
    set({title});
  },
  setTextColor(textColor: string) {
    set({textColor});
  },
  setBGImage: (bgImage: string) => {
    set({bgImage});
  },
  updateLocal() {
    setLocal('game-setting', {
      title: get().title,
      bgColor: get().bgColor,
      textColor: get().textColor,
      bgImage: get().bgImage
    } as TDefaultSetting);
  },
  loadLocal() {
    const gameSetting = getLocal('game-setting') as TDefaultSetting;
    gameSetting.title && set({title: gameSetting.title});
    gameSetting.bgColor && set({bgColor: gameSetting.bgColor});
    gameSetting.textColor && set({textColor: gameSetting.textColor});
    gameSetting.bgImage && set({bgImage: gameSetting.bgImage});
  },
  reset() {
    set({
      title: DEFAULT_SETTING.TITLE,
      bgColor: DEFAULT_SETTING.BG_COLOR,
      textColor: DEFAULT_SETTING.TEXT_COLOR,
      bgImage: ''
    });
    removeLocal('game-setting');
  }
}));
