import {IPlayer} from '@/localdb/models/player.model';
import {ISetting} from '@/localdb/models/setting.model';

export enum Types {
  TOOGLE_MODAL_DELETE_ALL_PLAYERS = 'game/TOOGLE_MODAL_DELETE_ALL_PLAYERS',
  TOGGLE_SPINNING = 'game/TOGGLE_SPINNING',
  TOGGLE_WINNING = 'game/TOGGLE_WINNING',

  SET_RUN_TIME = 'game/SET_RUN_TIME',
  SET_WINNER = 'game/SET_WINNER',

  GET_SETTINGS_REQUEST = 'game/GET_SETTINGS_REQUEST',
  GET_SETTINGS_SUCCESS = 'game/GET_SETTINGS_SUCCESS',
  GET_SETTINGS_FAILURE = 'game/GET_SETTINGS_FAILURE',

  SAVE_SETTINGS_REQUEST = 'game/SAVE_SETTINGS_REQUEST',
  SAVE_SETTINGS_SUCCESS = 'game/SAVE_SETTINGS_SUCCESS',
  SAVE_SETTINGS_FAILURE = 'game/SAVE_SETTINGS_FAILURE',

  GET_PLAYERS_REQUEST = 'game/GET_PLAYERS_REQUEST',
  GET_PLAYERS_SUCCESS = 'game/GET_PLAYERS_SUCCESS',
  GET_PLAYERS_FAILURE = 'game/GET_PLAYERS_FAILURE',

  ADD_PLAYER_REQUEST = 'game/ADD_PLAYER_REQUEST',
  ADD_PLAYER_SUCCESS = 'game/ADD_PLAYER_SUCCESS',
  ADD_PLAYER_FAILURE = 'game/ADD_PLAYER_FAILURE',

  UPDATE_PLAYER_REQUEST = 'game/UPDATE_PLAYER_REQUEST',
  UPDATE_PLAYER_SUCCESS = 'game/UPDATE_PLAYER_SUCCESS',
  UPDATE_PLAYER_FAILURE = 'game/UPDATE_PLAYER_FAILURE',

  DELETE_PLAYER_REQUEST = 'game/DELETE_PLAYER_REQUEST',
  DELETE_PLAYER_SUCCESS = 'game/DELETE_PLAYER_SUCCESS',
  DELETE_PLAYER_FAILURE = 'game/DELETE_PLAYER_FAILURE',

  DELETE_ALL_PLAYERS_REQUEST = 'game/DELETE_ALL_PLAYERS_REQUEST',
  DELETE_ALL_PLAYERS_SUCCESS = 'game/DELETE_ALL_PLAYERS_SUCCESS',
  DELETE_ALL_PLAYERS_FAILURE = 'game/DELETE_ALL_PLAYERS_FAILURE'
}

export interface IState {
  runAt: Date | null;
  isSpinning: boolean;
  isShowWinning: boolean;
  isShowDeleteAllPlayer: boolean;
  winner: IPlayer | null;
  playerFetching: boolean;
  playerError: string | null;
  players: IPlayer[];
  settings: {
    isFetching: boolean;
    isBackgroundMusicOn: boolean;
    isSoundEffectOn: boolean;
  };
}
// ======================================================================================================
// SET RUN TIME
// ======================================================================================================
export type SetRunTime = {
  type: typeof Types.SET_RUN_TIME;
  payload: {runAt: Date | null};
};
// ======================================================================================================
// SET WINNER
// ======================================================================================================
export type SetWinner = {
  type: typeof Types.SET_WINNER;
  payload: {winner: IPlayer | null};
};
// ======================================================================================================
// TOOGLE MODAL DELETE ALL PLAYERS
// ======================================================================================================
export interface ToggleDeleteAllPlayer {
  type: typeof Types.TOOGLE_MODAL_DELETE_ALL_PLAYERS;
  payload: {isShowDeleteAllPlayer: boolean};
}
// ======================================================================================================
// SET SPINNING
// ======================================================================================================
export interface ToggleSpinning {
  type: typeof Types.TOGGLE_SPINNING;
  payload: {isSpinning: boolean};
}
// ======================================================================================================
// SET WINNING
// ======================================================================================================
export interface ToggleWinning {
  type: typeof Types.TOGGLE_WINNING;
  payload: {isShowWinning: boolean};
}

// ======================================================================================================
// GET SETTINGS
// ======================================================================================================
export interface GetSettingsRequest {
  type: typeof Types.GET_SETTINGS_REQUEST;
}
export interface GetSettingsSuccess {
  type: typeof Types.GET_SETTINGS_SUCCESS;
  payload: ISetting;
}
export interface GetSettingsFailure {
  type: typeof Types.GET_SETTINGS_FAILURE;
  payload: {message: string};
}
// ======================================================================================================
// SAVE SETTINGS
// ======================================================================================================
export interface SaveSettingsRequest {
  type: typeof Types.SAVE_SETTINGS_REQUEST;
}
export interface SaveSettingsSuccess {
  type: typeof Types.SAVE_SETTINGS_SUCCESS;
  payload: ISetting;
}
export interface SaveSettingsFailure {
  type: typeof Types.SAVE_SETTINGS_FAILURE;
  payload: Error;
}
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export interface GetPlayersRequest {
  type: typeof Types.GET_PLAYERS_REQUEST;
}
export interface GetPlayersSuccess {
  type: typeof Types.GET_PLAYERS_SUCCESS;
  payload: IPlayer[];
}
export interface GetPlayersFailure {
  type: typeof Types.GET_PLAYERS_FAILURE;
  payload: {message: string};
}
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export interface AddPlayerRequest {
  type: typeof Types.ADD_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface AddPlayerSuccess {
  type: typeof Types.ADD_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface AddPlayerFailure {
  type: typeof Types.ADD_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export interface UpdatePlayerRequest {
  type: typeof Types.UPDATE_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface UpdatePlayerSuccess {
  type: typeof Types.UPDATE_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface UpdatePlayerFailure {
  type: typeof Types.UPDATE_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export interface DeletePlayerRequest {
  type: typeof Types.DELETE_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface DeletePlayerSuccess {
  type: typeof Types.DELETE_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface DeletePlayerFailure {
  type: typeof Types.DELETE_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// DELETE ALL PLAYERS
// ======================================================================================================
export interface DeleteAllPlayersRequest {
  type: typeof Types.DELETE_ALL_PLAYERS_REQUEST;
}
export interface DeleteAllPlayersSuccess {
  type: typeof Types.DELETE_ALL_PLAYERS_SUCCESS;
}
export interface DeleteAllPlayersFailure {
  type: typeof Types.DELETE_ALL_PLAYERS_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// COMBINED ACTIONS
// ======================================================================================================
export type IAction =
  | SetRunTime
  | SetWinner
  | ToggleDeleteAllPlayer
  | ToggleSpinning
  | ToggleWinning
  // GET SETTINGS
  | GetSettingsRequest
  | GetSettingsSuccess
  | GetSettingsFailure
  // SAVE SETTINGS
  | SaveSettingsRequest
  | SaveSettingsSuccess
  | SaveSettingsFailure
  // GET ALL PLAYERS
  | GetPlayersRequest
  | GetPlayersSuccess
  | GetPlayersFailure
  // ADD PLAYER
  | AddPlayerRequest
  | AddPlayerSuccess
  | AddPlayerFailure
  // UPDATE PLAYER
  | UpdatePlayerRequest
  | UpdatePlayerSuccess
  | UpdatePlayerFailure
  // DELETE PLAYER
  | DeletePlayerRequest
  | DeletePlayerSuccess
  | DeletePlayerFailure
  // DELETE ALL PLAYERS
  | DeleteAllPlayersRequest
  | DeleteAllPlayersSuccess
  | DeleteAllPlayersFailure;
