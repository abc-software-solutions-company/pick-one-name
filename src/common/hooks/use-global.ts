import {create} from 'zustand';

type State = {
  isZoom: boolean;
  isMusic: boolean;
  bgImage?: string;
};

type Actions = {
  setZoom: (isZoom: boolean) => void;
  toggleMusic: (isMusic: boolean) => void;
  setBGImage: (bgImage: string) => void;
};

const initialState: State = {isZoom: false, isMusic: true, bgImage: ''};

export const useGlobal = create<State & Actions>()(set => ({
  ...initialState,
  setBGImage: (bgImage: string) => {
    set({bgImage});
  },
  setZoom: (isZoom: boolean) => {
    set({isZoom});
  },
  toggleMusic: (isMusic: boolean) => {
    set({isMusic});
  }
}));
