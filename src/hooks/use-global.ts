import {create} from 'zustand';

type State = {
  isZoom: boolean;
};

type Actions = {
  setZoom: (isZoom: boolean) => void;
};

const initialState: State = {isZoom: false};

export const useGlobal = create<State & Actions>()(set => ({
  ...initialState,
  setZoom: (isZoom: boolean) => {
    set({isZoom});
  }
}));
