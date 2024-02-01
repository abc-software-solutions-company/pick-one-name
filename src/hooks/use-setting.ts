import {create} from 'zustand';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true
};

export const useSetting = create<State & Actions>()(set => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  },
  setIsSettingOpen(isSettingOpen: boolean) {
    set({isSettingOpen});
  }
}));
