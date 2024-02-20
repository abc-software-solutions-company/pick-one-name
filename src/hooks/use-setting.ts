import {create} from 'zustand';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  color: string;
  isShowColorBox: boolean;
  title: string;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  setColor: (colorName: string) => void;
  setIsShowColorBox: (isShowColorBox: boolean) => void;
  setTitle: (value: string) => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  color: '',
  isShowColorBox: false,
  title: 'Random Number'
};

export const useSetting = create<State & Actions>()(set => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  },
  setIsSettingOpen(isSettingOpen: boolean) {
    set({isSettingOpen});
  },
  setColor(colorName: string) {
    set(state => ({...state, color: colorName}));
  },
  setIsShowColorBox(isShowColorBox: boolean) {
    set({isShowColorBox});
  },
  setTitle(value: string) {
    set(state => ({...state, title: value}));
  }
}));
