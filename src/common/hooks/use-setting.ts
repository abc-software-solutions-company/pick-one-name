import {create} from 'zustand';

import {DEFAULT_SETTING} from '../constants';
import {TAttrSetting, TDefaultSetting} from '../types';
import {getLocal, removeLocal, setLocal} from '../utils';

type State = {
  isSettingOpen: boolean;
  isVisible: boolean;
  isTextFrame: boolean;
  isNumberFrame: boolean;
  background: TAttrSetting;
  text: TAttrSetting;
  button: TAttrSetting;
};

type Actions = {
  setIsSettingOpen: (isSettingOpen: boolean) => void;
  setVisible: (isVisible: boolean) => void;
  toggleTextFrame: (isShow: boolean) => void;
  toggleNumberFrame: (isShow: boolean) => void;
  setBackground: (type: 'color' | 'value', value: string) => void;
  setText: (type: 'color' | 'value', value: string) => void;
  setButton: (type: 'color' | 'value', value: string) => void;
  updateLocal: () => void;
  loadLocal: () => void;
  reset: () => void;
};

const initialState: State = {
  isSettingOpen: false,
  isVisible: true,
  isTextFrame: true,
  isNumberFrame: true,
  background: {
    color: DEFAULT_SETTING.BG_COLOR,
    value: ''
  },
  text: {
    color: DEFAULT_SETTING.COLOR,
    value: DEFAULT_SETTING.TITLE
  },
  button: {
    color: DEFAULT_SETTING.COLOR,
    value: DEFAULT_SETTING.BUTTON_VALUE
  }
};

export const useSetting = create<State & Actions>()((set, get) => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  },
  setIsSettingOpen(isSettingOpen: boolean) {
    set({isSettingOpen});
  },
  toggleTextFrame: (isShow: boolean) => {
    set({isTextFrame: isShow});
  },
  toggleNumberFrame: (isShow: boolean) => {
    set({isNumberFrame: isShow});
  },
  setBackground: (type: 'color' | 'value', value: string) => {
    set({background: {...get().background, [type]: value}});
  },
  setText: (type: 'color' | 'value', value: string) => {
    set({text: {...get().text, [type]: value}});
  },
  setButton: (type: 'color' | 'value', value: string) => {
    set({button: {...get().button, [type]: value}});
  },
  updateLocal() {
    setLocal('game-setting', {
      isTextFrame: get().isTextFrame,
      isNumberFrame: get().isNumberFrame,
      text: {
        color: get().text.color,
        value: get().text.value
      },
      background: {
        color: get().background.color,
        value: get().background.value
      },
      button: {
        color: get().button.color,
        value: get().button.value
      }
    } as TDefaultSetting);
  },
  loadLocal() {
    const gameSetting = getLocal('game-setting') as TDefaultSetting;
    gameSetting.isTextFrame && set({isTextFrame: gameSetting.isTextFrame});
    gameSetting.isNumberFrame && set({isNumberFrame: gameSetting.isNumberFrame});
    gameSetting.text && set({text: gameSetting.text});
    gameSetting.background && set({background: gameSetting.background});
    gameSetting.button && set({button: gameSetting.button});
  },
  reset() {
    set({
      isTextFrame: true,
      isNumberFrame: true,
      background: {
        color: DEFAULT_SETTING.BG_COLOR,
        value: ''
      },
      text: {
        color: DEFAULT_SETTING.COLOR,
        value: DEFAULT_SETTING.TITLE
      },
      button: {
        color: DEFAULT_SETTING.COLOR,
        value: DEFAULT_SETTING.BUTTON_VALUE
      }
    });
    removeLocal('game-setting');
  }
}));
