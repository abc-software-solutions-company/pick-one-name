import Database from '@/utils/database';
import CollectionPlayer from '@/utils/players';

import {IState} from './types';

const db = new Database('lucky.db');
const playerCollection = new CollectionPlayer(db);

const initialState: IState = {
  isBackgroundMusicOn: true,
  isSoundEffectOn: false,
  isWheelSpinning: false,
  playerFetching: false,
  playerError: null,
  players: playerCollection.list()
};

export default initialState;
