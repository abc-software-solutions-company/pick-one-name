import {create} from 'zustand';

import {TConfirmBox} from '../types/global.type';

type State = {
  isZoom: boolean;
  isMusic: boolean;
  confirm: TConfirmBox;
};

type Actions = {
  setZoom: (isZoom: boolean) => void;
  toggleMusic: (isMusic: boolean) => void;
  configConfirmBox: (confirm: TConfirmBox) => void;
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
  configConfirmBox: (confirm: TConfirmBox) => {
    set({confirm: confirm});
  }
}));
