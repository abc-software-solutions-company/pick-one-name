import {create} from 'zustand';

import {IWheelNumbers} from '@/components/number-wheel/type';

type State = {
  wheelnumbers: IWheelNumbers[];
  randomNumberList: number[];
  randomNumber: number;
  min: number;
  max: number;
  isDone: boolean;
  isAnimationStart: boolean;
  isInputValid: boolean;
};

type Actions = {
  setAnimationStart: (isAnimationStart: boolean) => void;
  setDone: (isDone: boolean) => void;
  generateWheelNumbers: () => void;
  setMin: (minNumber: number) => void;
  setMax: (maxNumber: number) => void;
  generateRandNumber: () => void;
  generateNumberList: (number: number) => void;
  updateNumberList: (number?: number) => void;
  setIsInputValid: (isInputValid: boolean) => void;
};

const initialState: State = {
  isAnimationStart: false,
  isDone: false,
  wheelnumbers: [],
  randomNumberList: [],
  randomNumber: 0,
  min: 1,
  max: 100,
  isInputValid: false
};

export const useRandomNumber = create<State & Actions>()((set, get) => ({
  ...initialState,
  setAnimationStart: (isAnimationStart: boolean) => {
    set({isAnimationStart});
  },
  setDone: (isDone: boolean) => {
    set({isDone});
  },
  generateRandNumber: () => {
    // const favoredNumber = 100;
    // const isFavoredNumber = Math.random() < 0.5;
    // return isFavoredNumber ? favoredNumber : Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    const number = Math.floor(Math.random() * (get().max - get().min + 1) + get().min);
    set({randomNumber: number});
  },
  generateWheelNumbers: () => {
    try {
      const arr: IWheelNumbers[] = [];
      let deg = 0;
      for (let i = 0; deg < 360; i++) {
        const newNum = {
          value: i % 10,
          style: {
            transform: `rotateX(${deg}deg) translateZ(114px)`,
            top: i % 10 === 0 ? '0' : ''
          }
        };
        arr.push(newNum);
        deg += 36;
      }
      set({wheelnumbers: arr});
    } catch (error) {
      console.log('generateNumberArr err:::', error);
    }
  },
  generateNumberList: (number: number) => {
    const maxNumberString = String(number);
    set({randomNumberList: new Array(maxNumberString.length).fill(0)});
  },
  updateNumberList: (number?: number) => {
    if (number) {
      const numbers = String(number)
        .split('')
        .map(num => {
          return Number(num);
        });
      while (numbers.length < get().randomNumberList.length) {
        numbers.unshift(0);
      }
      set({randomNumberList: numbers});
    } else {
      const numbers = String(get().randomNumber)
        .split('')
        .map(num => {
          return Number(num);
        });
      while (numbers.length < get().randomNumberList.length) {
        numbers.unshift(0);
      }
      set({randomNumberList: numbers});
    }
  },
  setMin: (minNumber: number) => {
    set(state => ({...state, min: minNumber}));
  },
  setMax: (maxNumber: number) => {
    set(state => ({...state, max: maxNumber}));
  },
  setIsInputValid(isInputValid: boolean) {
    set({isInputValid});
  }
}));
