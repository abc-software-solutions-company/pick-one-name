import {create} from 'zustand';

import {DEFAULT_SETTING} from '@/components/common/constant/wheelColor.constant';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  bgColor: string;
  title: string;
  textColor: string;
  bgImage?: string;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  setBgColor: (bgColor: string) => void;
  setTitle: (value: string) => void;
  setTextColor: (value: string) => void;
  setBGImage: (bgImage: string) => void;
  setReset: () => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  bgColor: '',
  title: 'Random Number',
  textColor: '',
  bgImage: ''
};

export const useSetting = create<State & Actions>()(set => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  },
  setIsSettingOpen(isSettingOpen: boolean) {
    set({isSettingOpen});
  },
  setBgColor(bgColor: string) {
    set(state => ({...state, bgColor: bgColor}));
  },
  setTitle(value: string) {
    set(state => ({...state, title: value}));
  },
  setTextColor(value: string) {
    set(state => ({...state, textColor: value}));
  },
  setBGImage: (bgImage: string) => {
    set({bgImage});
  },
  setReset() {
    set(state => ({
      ...state,
      title: DEFAULT_SETTING.TITLE,
      bgColor: '',
      textColor: DEFAULT_SETTING.DEFAULT_WHEEL_TEXT_COLOR,
      bgImage: ''
    }));
  }
}));
