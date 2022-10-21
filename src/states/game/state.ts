import {IState} from './types';

const initialState: IState = {
  runAt: null,
  isSpinning: false,
  isShowWinning: false,
  isShowDeleteAllPlayer: false,
  winner: null,
  playerFetching: false,
  playerError: null,
  players: [],
  settings: {
    isFetching: false,
    isBackgroundMusicOn: true,
    isSoundEffectOn: false
  }
};

export default initialState;
