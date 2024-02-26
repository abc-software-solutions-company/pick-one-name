import {create} from 'zustand';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  bgColor: string;
  hexBgColor: string;
  isShowBgColorBox: boolean;
  isShowTextColorBox: boolean;
  title: string;
  textColor: string;
  hexTextColor: string;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  setBgColor: (bgColor: string) => void;
  setHexBgColor: (hexBgColor: string) => void;
  setIsShowBgColorBox: (isShowBgColorBox: boolean) => void;
  setTitle: (value: string) => void;
  setisShowTextColorBox: (isShowTextColorBox: boolean) => void;
  setTextColor: (value: string) => void;
  setHexTextColor: (value: string) => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  bgColor: '',
  hexBgColor: '',
  isShowBgColorBox: false,
  isShowTextColorBox: false,
  title: 'Random Number',
  textColor: '',
  hexTextColor: ''
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
  setHexBgColor(hexBgColor: string) {
    set(state => ({...state, hexBgColor: hexBgColor}));
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
  },
  setHexTextColor(value: string) {
    set(state => ({...state, hexTextColor: value}));
  }
}));
