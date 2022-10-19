import {IPlayer} from '@/utils/players';

export enum Types {
  TOGGLE_BACKGROUND_MUSIC = 'game/TOGGLE_BACKGROUND_MUSIC',
  TOOGLE_SOUND_EFFECT = 'game/TOOGLE_SOUND_EFFECT',

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
  isBackgroundMusicOn: boolean;
  isSoundEffectOn: boolean;
  isWheelSpinning: boolean;
  playerFetching: boolean;
  playerError: string | null;
  players: IPlayer[];
}

// ======================================================================================================
// TOGGLE BACKGROUND MUSIC
// ======================================================================================================
export interface IActionBackgroundMusic {
  type: typeof Types.TOGGLE_BACKGROUND_MUSIC;
  payload: IActionBackgroundMusicPayload;
}
export interface IActionBackgroundMusicPayload {
  isBackgroundMusicOn: boolean;
}
// ======================================================================================================
// TOOGLE SOUND EFFECT
// ======================================================================================================
export interface IActionToggleSoundEffect {
  type: typeof Types.TOOGLE_SOUND_EFFECT;
  payload: IActionToggleSoundEffectPayload;
}
export interface IActionToggleSoundEffectPayload {
  isSoundEffectOn: boolean;
}
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export interface IActionGetPlayersRequest {
  type: typeof Types.GET_PLAYERS_REQUEST;
}
export interface IActionGetPlayersSuccess {
  type: typeof Types.GET_PLAYERS_SUCCESS;
  payload: IActionGetPlayersSuccessPayload;
}
export interface IActionGetPlayersSuccessPayload {
  payload: {players: IPlayer[]};
}
export interface IActionGetPlayersFailure {
  type: typeof Types.GET_PLAYERS_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export interface IActionAddPlayerRequest {
  type: typeof Types.ADD_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface IActionAddPlayerSuccess {
  type: typeof Types.ADD_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface IActionAddPlayerFailure {
  type: typeof Types.ADD_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export interface IActionUpdatePlayerRequest {
  type: typeof Types.UPDATE_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface IActionUpdatePlayerSuccess {
  type: typeof Types.UPDATE_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface IActionUpdatePlayerFailure {
  type: typeof Types.UPDATE_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export interface IActionDeletePlayerRequest {
  type: typeof Types.DELETE_PLAYER_REQUEST;
  payload: {player: IPlayer};
}
export interface IActionDeletePlayerSuccess {
  type: typeof Types.DELETE_PLAYER_SUCCESS;
  payload: IPlayer;
}
export interface IActionDeletePlayerFailure {
  type: typeof Types.DELETE_PLAYER_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// DELETE ALL PLAYERS
// ======================================================================================================
export interface IActionDeleteAllPlayersRequest {
  type: typeof Types.DELETE_ALL_PLAYERS_REQUEST;
}
export interface IActionDeleteAllPlayersSuccess {
  type: typeof Types.DELETE_ALL_PLAYERS_SUCCESS;
}
export interface IActionDeleteAllPlayersFailure {
  type: typeof Types.DELETE_ALL_PLAYERS_FAILURE;
  payload: {player: IPlayer};
}
// ======================================================================================================
// COMBINED ACTIONS
// ======================================================================================================
export type IAction =
  | IActionBackgroundMusic
  | IActionToggleSoundEffect
  // GET ALL PLAYERS
  | IActionGetPlayersRequest
  | IActionGetPlayersSuccess
  | IActionGetPlayersFailure
  // ADD PLAYER
  | IActionAddPlayerRequest
  | IActionAddPlayerSuccess
  | IActionAddPlayerFailure
  // UPDATE PLAYER
  | IActionUpdatePlayerRequest
  | IActionUpdatePlayerSuccess
  | IActionUpdatePlayerFailure
  // DELETE PLAYER
  | IActionDeletePlayerRequest
  | IActionDeletePlayerSuccess
  | IActionDeletePlayerFailure
  // DELETE ALL PLAYERS
  | IActionDeleteAllPlayersRequest
  | IActionDeleteAllPlayersSuccess
  | IActionDeleteAllPlayersFailure;
