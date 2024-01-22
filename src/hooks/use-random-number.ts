import {create} from 'zustand';

import {IWheelNumbers} from '@/components/number-wheel/type';

type State = {
  wheelnumbers: IWheelNumbers[];
  randomNumberList: number[];
  randomNumber: number;
  isDone: boolean;
  isBGImage: boolean;
  isAnimationStart: boolean;
};

type Actions = {
  setAnimationStart: (isAnimationStart: boolean) => void;
  setDone: (isDone: boolean) => void;
  setBGImage: (isBGImage: boolean) => void;
  generateWheelNumbers: () => void;
  generateRandNumber: (maxNumber: number, minNumber: number) => void;
  generateNumberList: (number: number) => void;
  updateNumberList: (number?: number) => void;
};

const initialState: State = {
  isAnimationStart: false,
  isBGImage: false,
  isDone: false,
  wheelnumbers: [],
  randomNumberList: [],
  randomNumber: 0
};

export const useRandomNumber = create<State & Actions>()((set, get) => ({
  ...initialState,
  setAnimationStart: (isAnimationStart: boolean) => {
    set({isAnimationStart});
  },
  setBGImage: (isBGImage: boolean) => {
    set({isBGImage});
  },
  setDone: (isDone: boolean) => {
    set({isDone});
  },
  generateRandNumber: (maxNumber: number, minNumber: number) => {
    // const favoredNumber = 100;
    // const isFavoredNumber = Math.random() < 0.5;
    // return isFavoredNumber ? favoredNumber : Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    const number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
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
            top: i % 10 === 0 ? '0' : '',
            opacity: 1
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
  }
}));
