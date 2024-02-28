import {create} from 'zustand';

type State = {
  isZoom: boolean;
  isMusic: boolean;
};

type Actions = {
  setZoom: (isZoom: boolean) => void;
  toggleMusic: (isMusic: boolean) => void;
};

const initialState: State = {isZoom: false, isMusic: true};

export const useGlobal = create<State & Actions>()(set => ({
  ...initialState,
  setZoom: (isZoom: boolean) => {
    set({isZoom});
  },
  toggleMusic: (isMusic: boolean) => {
    set({isMusic});
  }
}));
