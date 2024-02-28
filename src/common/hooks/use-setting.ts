import {create} from 'zustand';

import {DEFAULT_SETTING} from '@/components/common/constants/wheelColor.constant';

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
  Reset: () => void;
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
  Reset() {
    set({
      title: DEFAULT_SETTING.TITLE,
      bgColor: '',
      textColor: DEFAULT_SETTING.DEFAULT_WHEEL_TEXT_COLOR,
      bgImage: ''
    });
  }
}));
