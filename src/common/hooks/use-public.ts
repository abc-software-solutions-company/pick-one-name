import {create} from 'zustand';

type State = {
  isLogin: boolean;
  gmailValue: string;
  passValue: string;
  rePassValue: string;
  name: string;
};

type Actions = {
  setIsLogin: (isLogin: boolean) => void;
  setGmailValue: (value: string) => void;
  setPassValue: (value: string) => void;
  setRePassValue: (value: string) => void;
  setName: (value: string) => void;
};

const initialState: State = {
  isLogin: false,
  gmailValue: '',
  passValue: '',
  rePassValue: '',
  name: ''
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
  },
  setRePassValue(value: string) {
    set(state => ({...state, rePassValue: value}));
  },
  setName(value: string) {
    set(state => ({...state, name: value}));
  }
}));
