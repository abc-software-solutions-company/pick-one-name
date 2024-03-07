import {create} from 'zustand';

type TPlan = {
  day: number;
  price: number;
};

type State = {
  plan: TPlan;
};

type Actions = {
  updatePlan: (plan: TPlan) => void;
};

const initialState: State = {plan: {day: 0, price: 0}};

export const usePlan = create<State & Actions>()(set => ({
  ...initialState,
  updatePlan: (plan: TPlan) => {
    set(state => ({...state, plan}));
  }
}));
