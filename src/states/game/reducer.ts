import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // ======================================================================================================
    // TOOGLE MODAL DELETE ALL PLAYERS
    // ======================================================================================================
    case Types.TOOGLE_MODAL_DELETE_ALL_PLAYERS:
      state.isShowDeleteAllPlayer = action.payload.isShowDeleteAllPlayer;
      return state;
    // ======================================================================================================
    // TOGGLE SPINNING
    // ======================================================================================================
    case Types.TOGGLE_SPINNING:
      state.isSpinning = action.payload.isSpinning;
      return state;
    // ======================================================================================================
    // TOGGLE WINNING
    // ======================================================================================================
    case Types.TOGGLE_WINNING:
      state.isShowWinning = action.payload.isShowWinning;
      return state;
    // ======================================================================================================
    // SET RUN TIME
    // ======================================================================================================
    case Types.SET_RUN_TIME:
      state.runAt = action.payload.runAt;
      return state;
    // ======================================================================================================
    // SET WINNER
    // ======================================================================================================
    case Types.SET_WINNER:
      state.winner = action.payload.winner;
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
      return state;

    // ======================================================================================================
    // GET ALL PLAYERS
    // ======================================================================================================
    case Types.GET_PLAYERS_REQUEST:
      state.playerFetching = true;
      return state;
    case Types.GET_PLAYERS_SUCCESS:
      state.playerFetching = false;
      state.players = action.payload;
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
      state.players.map(x => {
        if (x.$loki === action.payload.$loki) {
          x.name = action.payload.name;
          x.visible = action.payload.visible;
        }
      });
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
      state.isShowDeleteAllPlayer = false;
      state.players = [];
      return state;
    case Types.DELETE_ALL_PLAYERS_FAILURE:
      state.playerFetching = false;
      return state;
    default:
      return state;
  }
}
