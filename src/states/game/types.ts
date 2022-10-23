import {IPlayer} from '@/localdb/models/player.model';
import {ISetting} from '@/localdb/models/setting.model';

export enum Types {
  TOGGLE_SPINNING = 'game/TOGGLE_SPINNING',
  TOGGLE_WINNER = 'game/TOGGLE_WINNER',
  TOOGLE_DELETE_ALL_PLAYERS = 'game/TOOGLE_DELETE_ALL_PLAYERS',

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
  isShowWinner: boolean;
  isShowDeleteAllPlayers: boolean;
  winner: IPlayer | null;
  players: {
    isFetching: boolean;
    error: string | null;
    items: IPlayer[];
  };
  settings: {
    isFetching: boolean;
    error: string | null;
    isBackgroundMusicOn: boolean;
    isSoundEffectOn: boolean;
  };
}
// ======================================================================================================
// TOGGLE SPINNING
// ======================================================================================================
export type ToggleSpinning = {type: typeof Types.TOGGLE_SPINNING; payload: boolean};
// ======================================================================================================
// TOGGLE WINNER
// ======================================================================================================
export type ToggleWinner = {type: typeof Types.TOGGLE_WINNER; payload: boolean};
// ======================================================================================================
// TOOGLE DELETE ALL PLAYERS
// ======================================================================================================
export type ToggleDeleteAllPlayers = {type: typeof Types.TOOGLE_DELETE_ALL_PLAYERS; payload: boolean};
// ======================================================================================================
// SET RUN TIME
// ======================================================================================================
export type SetRunTime = {type: typeof Types.SET_RUN_TIME; payload: Date | null};
// ======================================================================================================
// SET WINNER
// ======================================================================================================
export type SetWinner = {type: typeof Types.SET_WINNER; payload: IPlayer | null};
// ======================================================================================================
// GET SETTINGS
// ======================================================================================================
export type GetSettingsRequest = {type: typeof Types.GET_SETTINGS_REQUEST};
export type GetSettingsSuccess = {type: typeof Types.GET_SETTINGS_SUCCESS; payload: ISetting};
export type GetSettingsFailure = {type: typeof Types.GET_SETTINGS_FAILURE; payload: string};
// ======================================================================================================
// SAVE SETTINGS
// ======================================================================================================
export type SaveSettingsRequest = {type: typeof Types.SAVE_SETTINGS_REQUEST};
export type SaveSettingsSuccess = {type: typeof Types.SAVE_SETTINGS_SUCCESS; payload: ISetting};
export type SaveSettingsFailure = {type: typeof Types.SAVE_SETTINGS_FAILURE; payload: string};
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export type GetAllPlayersRequest = {type: typeof Types.GET_PLAYERS_REQUEST};
export type GetAllPlayersSuccess = {type: typeof Types.GET_PLAYERS_SUCCESS; payload: IPlayer[]};
export type GetAllPlayersFailure = {type: typeof Types.GET_PLAYERS_FAILURE; payload: string};
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export type AddPlayerRequest = {type: typeof Types.ADD_PLAYER_REQUEST};
export type AddPlayerSuccess = {type: typeof Types.ADD_PLAYER_SUCCESS; payload: IPlayer};
export type AddPlayerFailure = {type: typeof Types.ADD_PLAYER_FAILURE; payload: string};
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export type UpdatePlayerRequest = {type: typeof Types.UPDATE_PLAYER_REQUEST};
export type UpdatePlayerSuccess = {type: typeof Types.UPDATE_PLAYER_SUCCESS; payload: IPlayer};
export type UpdatePlayerFailure = {type: typeof Types.UPDATE_PLAYER_FAILURE; payload: string};
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export type DeletePlayerRequest = {type: typeof Types.DELETE_PLAYER_REQUEST};
export type DeletePlayerSuccess = {type: typeof Types.DELETE_PLAYER_SUCCESS; payload: IPlayer};
export type DeletePlayerFailure = {type: typeof Types.DELETE_PLAYER_FAILURE; payload: string};
// ======================================================================================================
// DELETE ALL PLAYERS
// ======================================================================================================
export type DeleteAllPlayersRequest = {type: typeof Types.DELETE_ALL_PLAYERS_REQUEST};
export type DeleteAllPlayersSuccess = {type: typeof Types.DELETE_ALL_PLAYERS_SUCCESS};
export type DeleteAllPlayersFailure = {type: typeof Types.DELETE_ALL_PLAYERS_FAILURE; payload: string};
// ======================================================================================================
// COMBINED ACTIONS
// ======================================================================================================
export type IAction =
  | SetWinner
  | SetRunTime
  | ToggleDeleteAllPlayers
  | ToggleSpinning
  | ToggleWinner
  | GetSettingsRequest
  | GetSettingsSuccess
  | GetSettingsFailure
  | SaveSettingsRequest
  | SaveSettingsSuccess
  | SaveSettingsFailure
  | GetAllPlayersRequest
  | GetAllPlayersSuccess
  | GetAllPlayersFailure
  | AddPlayerRequest
  | AddPlayerSuccess
  | AddPlayerFailure
  | UpdatePlayerRequest
  | UpdatePlayerSuccess
  | UpdatePlayerFailure
  | DeletePlayerRequest
  | DeletePlayerSuccess
  | DeletePlayerFailure
  | DeleteAllPlayersRequest
  | DeleteAllPlayersSuccess
  | DeleteAllPlayersFailure;
