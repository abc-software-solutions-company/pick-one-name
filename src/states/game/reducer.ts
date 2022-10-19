import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // ======================================================================================================
    // TOGGLE BACKGROUND MUSIC
    // ======================================================================================================
    case Types.TOGGLE_BACKGROUND_MUSIC:
      state.isBackgroundMusicOn = action.payload.isBackgroundMusicOn;
      return state;
    // ======================================================================================================
    // TOOGLE SOUND EFFECT
    // ======================================================================================================
    case Types.TOOGLE_SOUND_EFFECT:
      state.isSoundEffectOn = action.payload.isSoundEffectOn;
      return state;
    // ======================================================================================================
    // GET ALL PLAYERS
    // ======================================================================================================
    case Types.GET_PLAYERS_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.GET_PLAYERS_SUCCESS:
      state.playerFetching = false;
      return state;
    case Types.GET_PLAYERS_FAILURE:
      state.playerFetching = false;
      return state;
    // ======================================================================================================
    // ADD PLAYER
    // ======================================================================================================
    case Types.ADD_PLAYER_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.ADD_PLAYER_SUCCESS:
      state.playerFetching = false;
      state.players.push(action.payload);
    case Types.ADD_PLAYER_FAILURE:
      state.playerFetching = false;
      return state;
    // ======================================================================================================
    // UPDATE PLAYER
    // ======================================================================================================
    case Types.UPDATE_PLAYER_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.UPDATE_PLAYER_SUCCESS:
      state.playerFetching = false;
      const updatePlayerIdx = state.players.findIndex(x => x.$loki === action.payload.$loki);
      state.players[updatePlayerIdx].visible = action.payload.visible;
      state.players[updatePlayerIdx].name = action.payload.name;
      return state;
    case Types.UPDATE_PLAYER_FAILURE:
      state.playerFetching = false;
      return state;
    // ======================================================================================================
    // DELETE PLAYER
    // ======================================================================================================
    case Types.DELETE_PLAYER_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.DELETE_PLAYER_SUCCESS:
      state.playerFetching = false;
      state.players = state.players.filter(x => x.$loki !== action.payload.$loki);
      return state;
    case Types.DELETE_PLAYER_FAILURE:
      state.playerFetching = false;
      return state;
    // ======================================================================================================
    // DELETE ALL PLAYERS
    // ======================================================================================================
    case Types.DELETE_ALL_PLAYERS_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.DELETE_ALL_PLAYERS_SUCCESS:
      state.playerFetching = false;
      state.players = [];
      return state;
    case Types.DELETE_ALL_PLAYERS_FAILURE:
      state.playerFetching = false;
      return state;
    default:
      return state;
  }
}
