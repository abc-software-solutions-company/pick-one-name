import {IPlayer} from '@/localdb/models/player.model';
import {ISetting} from '@/localdb/models/setting.model';

import {
  AddPlayerFailure,
  AddPlayerRequest,
  AddPlayerSuccess,
  DeleteAllPlayersFailure,
  DeleteAllPlayersRequest,
  DeleteAllPlayersSuccess,
  DeletePlayerFailure,
  DeletePlayerRequest,
  DeletePlayerSuccess,
  GetAllPlayersFailure,
  GetAllPlayersRequest,
  GetAllPlayersSuccess,
  GetSettingsFailure,
  GetSettingsRequest,
  GetSettingsSuccess,
  SaveSettingsFailure,
  SaveSettingsRequest,
  SaveSettingsSuccess,
  SetRunTime,
  SetWinner,
  ToggleDeleteAllPlayers,
  ToggleSpinning,
  ToggleWinner,
  Types,
  UpdatePlayerFailure,
  UpdatePlayerRequest,
  UpdatePlayerSuccess
} from './types';
// ======================================================================================================
// TOOGLE SPINNING
// ======================================================================================================
export const toggleSpining = (payload: boolean): ToggleSpinning => {
  return {type: Types.TOGGLE_SPINNING, payload};
};
// ======================================================================================================
// TOOGLE WINNER
// ======================================================================================================
export const toggleWinner = (payload: boolean): ToggleWinner => {
  return {type: Types.TOGGLE_WINNER, payload};
};
// ======================================================================================================
// TOOGLE DELETE ALL PLAYERS
// ======================================================================================================
export const toggleShowDeleteAllPlayer = (payload: boolean): ToggleDeleteAllPlayers => {
  return {type: Types.TOOGLE_DELETE_ALL_PLAYERS, payload};
};
// ======================================================================================================
// SET RUN TIME
// ======================================================================================================
export const setRunTime = (payload: Date | null): SetRunTime => {
  return {type: Types.SET_RUN_TIME, payload};
};
// SET WINNER
// ======================================================================================================
export const setWinner = (payload: IPlayer | null): SetWinner => {
  return {type: Types.SET_WINNER, payload};
};
// ======================================================================================================
// GET SETTINGS
// ======================================================================================================
export const getSettingsRequest = (): GetSettingsRequest => {
  return {type: Types.GET_SETTINGS_REQUEST};
};
export const getSettingsSuccess = (payload: ISetting): GetSettingsSuccess => {
  return {type: Types.GET_SETTINGS_SUCCESS, payload};
};
export const getSettingsFailure = (payload: string): GetSettingsFailure => {
  return {type: Types.GET_SETTINGS_FAILURE, payload};
};
// ======================================================================================================
// SAVE SETTINGS
// ======================================================================================================
export const saveSettingsRequest = (): SaveSettingsRequest => {
  return {type: Types.SAVE_SETTINGS_REQUEST};
};
export const saveSettingsSuccess = (payload: ISetting): SaveSettingsSuccess => {
  return {type: Types.SAVE_SETTINGS_SUCCESS, payload};
};
export const saveSettingsFailure = (payload: string): SaveSettingsFailure => {
  return {type: Types.SAVE_SETTINGS_FAILURE, payload};
};
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export const getAllPlayersRequest = (): GetAllPlayersRequest => {
  return {type: Types.GET_PLAYERS_REQUEST};
};
export const getAllPlayersSuccess = (payload: IPlayer[]): GetAllPlayersSuccess => {
  return {type: Types.GET_PLAYERS_SUCCESS, payload};
};
export const getAllPlayersFailure = (payload: string): GetAllPlayersFailure => {
  return {type: Types.GET_PLAYERS_FAILURE, payload};
};
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export const addPlayerRequest = (): AddPlayerRequest => {
  return {type: Types.ADD_PLAYER_REQUEST};
};
export const addPlayerSuccess = (payload: IPlayer): AddPlayerSuccess => {
  return {type: Types.ADD_PLAYER_SUCCESS, payload};
};
export const addPlayerFailure = (payload: string): AddPlayerFailure => {
  return {type: Types.ADD_PLAYER_FAILURE, payload};
};
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export const updatePlayerRequest = (): UpdatePlayerRequest => {
  return {type: Types.UPDATE_PLAYER_REQUEST};
};
export const updatePlayerSuccess = (payload: IPlayer): UpdatePlayerSuccess => {
  return {type: Types.UPDATE_PLAYER_SUCCESS, payload};
};
export const updatePlayerFailure = (payload: string): UpdatePlayerFailure => {
  return {type: Types.UPDATE_PLAYER_FAILURE, payload};
};
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export const deletePlayerRequest = (): DeletePlayerRequest => {
  return {type: Types.DELETE_PLAYER_REQUEST};
};
export const deletePlayerSuccess = (payload: IPlayer): DeletePlayerSuccess => {
  return {type: Types.DELETE_PLAYER_SUCCESS, payload};
};
export const deletePlayerFailure = (payload: string): DeletePlayerFailure => {
  return {type: Types.DELETE_PLAYER_FAILURE, payload};
};
// ======================================================================================================
// DELETE ALL PLAYERS
// ======================================================================================================
export const deleteAllPlayersRequest = (): DeleteAllPlayersRequest => {
  return {type: Types.DELETE_ALL_PLAYERS_REQUEST};
};
export const deleteAllPlayersSuccess = (): DeleteAllPlayersSuccess => {
  return {type: Types.DELETE_ALL_PLAYERS_SUCCESS};
};
export const deleteAllPlayersFailure = (payload: string): DeleteAllPlayersFailure => {
  return {type: Types.DELETE_ALL_PLAYERS_FAILURE, payload};
};
