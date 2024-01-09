import {create} from 'zustand';

import {IWheelNumbers} from '../components/random-number/type';

type State = {
  wheelnumbers: IWheelNumbers[];
  randomNumbers: number[];
};

type Actions = {
  generateWheelNumbers: () => void;
  generateRandomNumbers: (number: number) => void;
  updateRandomNumbers: (number: number) => void;
};

const initialState: State = {wheelnumbers: [], randomNumbers: []};

export const useRandomNumber = create<State & Actions>()((set, get) => ({
  ...initialState,
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
  generateRandomNumbers: (number: number) => {
    const maxNumberString = String(number);
    set({randomNumbers: new Array(maxNumberString.length).fill(0)});
  },
  updateRandomNumbers: (number: number) => {
    const numbers = String(number)
      .split('')
      .map(num => {
        return Number(num);
      });
    while (numbers.length < get().randomNumbers.length) {
      numbers.unshift(0);
    }
    set({randomNumbers: numbers});
  }
}));
