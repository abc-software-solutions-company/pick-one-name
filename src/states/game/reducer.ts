import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // ======================================================================================================
    // TOGGLE SPINNING
    // ======================================================================================================
    case Types.TOGGLE_SPINNING:
      state.isSpinning = action.payload;
      return state;
    // ======================================================================================================
    // TOGGLE WINNER
    // ======================================================================================================
    case Types.TOGGLE_WINNER:
      state.isShowWinner = action.payload;
      return state;
    // ======================================================================================================
    // TOOGLE DELETE ALL PLAYERS
    // ======================================================================================================
    case Types.TOOGLE_DELETE_ALL_PLAYERS:
      state.isShowDeleteAllPlayers = action.payload;
      return state;
    // ======================================================================================================
    // SET RUN TIME
    // ======================================================================================================
    case Types.SET_RUN_TIME:
      state.runAt = action.payload;
      return state;
    // ======================================================================================================
    // SET WINNER
    // ======================================================================================================
    case Types.SET_WINNER:
      state.winner = action.payload;
      return state;
    // ======================================================================================================
    // GET SETTINGS
    // ======================================================================================================
    case Types.GET_SETTINGS_REQUEST:
      state.settings.isFetching = true;
      return state;
    case Types.GET_SETTINGS_SUCCESS:
      state.settings.isFetching = false;
      state.settings.isBackgroundMusicOn = action.payload.isBackgroundMusicOn!;
      state.settings.isSoundEffectOn = action.payload.isSoundEffectOn!;
      return state;
    case Types.GET_SETTINGS_FAILURE:
      state.settings.isFetching = false;
      state.settings.error = action.payload;
      return state;
    // ======================================================================================================
    // SAVE SETTINGS
    // ======================================================================================================
    case Types.SAVE_SETTINGS_REQUEST:
      state.settings.isFetching = true;
      return state;
    case Types.SAVE_SETTINGS_SUCCESS:
      state.settings.isFetching = false;
      state.settings.isBackgroundMusicOn = action.payload.isBackgroundMusicOn!;
      state.settings.isSoundEffectOn = action.payload.isSoundEffectOn!;
      return state;
    case Types.SAVE_SETTINGS_FAILURE:
      state.settings.isFetching = false;
      state.settings.error = action.payload;
      return state;

    // ======================================================================================================
    // GET ALL PLAYERS
    // ======================================================================================================
    case Types.GET_PLAYERS_REQUEST:
      state.players.isFetching = true;
      return state;
    case Types.GET_PLAYERS_SUCCESS:
      state.players.isFetching = false;
      state.players.items = action.payload;
      return state;
    case Types.GET_PLAYERS_FAILURE:
      state.players.isFetching = false;
      state.players.error = action.payload;
      return state;
    // ======================================================================================================
    // ADD PLAYER
    // ======================================================================================================
    case Types.ADD_PLAYER_REQUEST:
      state.players.isFetching = true;
      return state;
    case Types.ADD_PLAYER_SUCCESS:
      state.players.isFetching = false;
      state.players.items.push(action.payload);
      return state;
    case Types.ADD_PLAYER_FAILURE:
      state.players.isFetching = false;
      state.players.error = action.payload;
      return state;
    // ======================================================================================================
    // UPDATE PLAYER
    // ======================================================================================================
    case Types.UPDATE_PLAYER_REQUEST:
      state.players.isFetching = true;
      return state;
    case Types.UPDATE_PLAYER_SUCCESS:
      state.players.isFetching = false;
      state.players.items.map(x => {
        if (x.$loki === action.payload.$loki) {
          x.name = action.payload.name;
          x.visible = action.payload.visible;
        }
      });
      return state;
    case Types.UPDATE_PLAYER_FAILURE:
      state.players.isFetching = false;
      return state;
    // ======================================================================================================
    // DELETE PLAYER
    // ======================================================================================================
    case Types.DELETE_PLAYER_REQUEST:
      state.players.isFetching = true;
      return state;
    case Types.DELETE_PLAYER_SUCCESS:
      state.players.isFetching = false;
      state.players.items = state.players.items.filter(x => x.$loki !== action.payload.$loki);
      return state;
    case Types.DELETE_PLAYER_FAILURE:
      state.players.isFetching = false;
      return state;
    // ======================================================================================================
    // DELETE ALL PLAYERS
    // ======================================================================================================
    case Types.DELETE_ALL_PLAYERS_REQUEST:
      state.players.isFetching = true;
      return state;
    case Types.DELETE_ALL_PLAYERS_SUCCESS:
      state.players.isFetching = false;
      state.isShowDeleteAllPlayers = false;
      state.players.items = [];
      return state;
    case Types.DELETE_ALL_PLAYERS_FAILURE:
      state.players.isFetching = false;
      return state;
    default:
      return state;
  }
}
