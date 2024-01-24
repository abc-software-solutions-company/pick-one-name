import {create} from 'zustand';

type State = {
  isVisible: boolean;
};

type Actions = {
  setVisible: (isVisible: boolean) => void;
};

const initialState: State = {isVisible: true};

export const useSetting = create<State & Actions>()(set => ({
  ...initialState,
  setVisible: (isVisible: boolean) => {
    set({isVisible});
  }
}));
