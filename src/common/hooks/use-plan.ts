import {create} from 'zustand';

type TPlan = {
  day: number;
  price: number;
};

type TCustomer = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

type State = {
  plan: TPlan;
  customer: TCustomer;
};

type Actions = {
  updatePlan: (plan: TPlan) => void;
  updateCustomer: (customer: TCustomer) => void;
};

const initialState: State = {
  plan: {
    day: 1,
    price: 5000
  },
  customer: {
    fullName: '',
    email: '',
    phoneNumber: ''
  }
};

export const usePlan = create<State & Actions>()(set => ({
  ...initialState,
  updatePlan: (plan: TPlan) => {
    set(state => ({...state, plan}));
  },
  updateCustomer: (customer: TCustomer) => {
    set(state => ({...state, customer}));
  }
}));
