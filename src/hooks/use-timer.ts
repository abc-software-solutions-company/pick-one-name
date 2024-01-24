import {create} from 'zustand';

type State = {
  timer: string;
};

type Actions = {
  setTimer: () => void;
};

const initialState: State = {timer: new Date().toLocaleString('vi')};

export const useTimer = create<State & Actions>()(set => ({
  ...initialState,
  setTimer: () => {
    set({timer: new Date().toLocaleString('vi')});
  }
}));
