import {create} from 'zustand';

type State = {
  isLogin: boolean;
  gmailValue: string;
  passValue: string;
};

type Actions = {
  setIsLogin: (isLogin: boolean) => void;
  setGmailValue: (value: string) => void;
  setPassValue: (value: string) => void;
};

const initialState: State = {
  isLogin: false,
  gmailValue: '',
  passValue: ''
};

export const usePublic = create<State & Actions>()(set => ({
  ...initialState,
  setIsLogin: (isLogin: boolean) => {
    set({isLogin});
  },
  setGmailValue(value: string) {
    set(state => ({...state, gmailValue: value}));
  },
  setPassValue(value: string) {
    set(state => ({...state, passValue: value}));
  }
}));
