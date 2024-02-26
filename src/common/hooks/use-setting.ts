import {create} from 'zustand';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  bgColor: string;
  isShowBgColorBox: boolean;
  isShowTextColorBox: boolean;
  title: string;
  textColor: string;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  setBgColor: (bgColor: string) => void;
  setIsShowBgColorBox: (isShowBgColorBox: boolean) => void;
  setTitle: (value: string) => void;
  setisShowTextColorBox: (isShowTextColorBox: boolean) => void;
  setTextColor: (value: string) => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  bgColor: '',
  isShowBgColorBox: false,
  isShowTextColorBox: false,
  title: 'Random Number',
  textColor: ''
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
  setIsShowBgColorBox(isShowBgColorBox: boolean) {
    set({isShowBgColorBox});
  },
  setTitle(value: string) {
    set(state => ({...state, title: value}));
  },
  setisShowTextColorBox(isShowTextColorBox: boolean) {
    set({isShowTextColorBox});
  },
  setTextColor(value: string) {
    set(state => ({...state, textColor: value}));
  }
}));
