import {IState} from './types';

const initialState: IState = {
  runAt: null,
  isSpinning: false,
  isShowWinner: false,
  isShowDeleteAllPlayers: false,
  winner: null,
  players: {
    isFetching: false,
    error: null,
    items: []
  },
  settings: {
    isFetching: false,
    error: null,
    isBackgroundMusicOn: true,
    isSoundEffectOn: false
  }
};

export default initialState;
