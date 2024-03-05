import {create} from 'zustand';

import {TConfilmBox} from '../types/global.type';

type State = {
  isZoom: boolean;
  isMusic: boolean;
  confirm: TConfilmBox;
};

type Actions = {
  setZoom: (isZoom: boolean) => void;
  toggleMusic: (isMusic: boolean) => void;
  configConfirmBox: (confilm: TConfilmBox) => void;
};

const initialState: State = {isZoom: false, isMusic: true, confirm: {show: false, message: ''}};

export const useGlobal = create<State & Actions>()(set => ({
  ...initialState,
  setZoom: (isZoom: boolean) => {
    set({isZoom});
  },
  toggleMusic: (isMusic: boolean) => {
    set({isMusic});
  },
  configConfirmBox: (confilm: TConfilmBox) => {
    set({confirm: confilm});
  }
}));
