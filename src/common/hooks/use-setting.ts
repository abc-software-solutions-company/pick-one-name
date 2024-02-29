import {create} from 'zustand';

import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

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
  bgColor: '',
  title: 'Quay số may mắn',
  textColor: '',
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
    localStorage.setItem('bgColor', get().bgColor);
    localStorage.setItem('textColor', get().textColor);
    localStorage.setItem('title', get().title);
    localStorage.setItem('bgImage', get().bgImage);
  },
  loadLocal() {
    const bgColor = localStorage.getItem('bgColor');
    const textColor = localStorage.getItem('textColor');
    const title = localStorage.getItem('title');
    const bgImage = localStorage.getItem('bgImage');
    bgColor && set({bgColor});
    textColor && set({textColor});
    title && set({title});
    bgImage && set({bgImage});
  },
  reset() {
    set({
      title: DEFAULT_SETTING.TITLE,
      bgColor: '',
      textColor: '',
      bgImage: ''
    });
  }
}));
