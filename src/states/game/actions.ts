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
  GetPlayersFailure,
  GetPlayersRequest,
  GetPlayersSuccess,
  GetSettingsFailure,
  GetSettingsRequest,
  GetSettingsSuccess,
  SaveSettingsFailure,
  SaveSettingsRequest,
  SaveSettingsSuccess,
  SetRunTime,
  SetWinner,
  ToggleDeleteAllPlayer,
  ToggleSpinning,
  ToggleWinning,
  Types,
  UpdatePlayerFailure,
  UpdatePlayerRequest,
  UpdatePlayerSuccess
} from './types';
// ======================================================================================================
// SET RUN TIME
// ======================================================================================================
export const setRunTime = (payload: any): SetRunTime => {
  return {type: Types.SET_RUN_TIME, payload};
};
// SET WINNER
// ======================================================================================================
export const setWinner = (payload: any): SetWinner => {
  return {type: Types.SET_WINNER, payload};
};
// ======================================================================================================
// TOOGLE SPINNING
// ======================================================================================================
export const toggleSpining = (payload: any): ToggleSpinning => {
  return {type: Types.TOGGLE_SPINNING, payload};
};
// ======================================================================================================
// TOOGLE SPINNING
// ======================================================================================================
export const toggleWinning = (payload: any): ToggleWinning => {
  return {type: Types.TOGGLE_WINNING, payload};
};
// ======================================================================================================
// TOOGLE MODAL DELETE ALL PLAYERS
// ======================================================================================================
export const setShowDeleteAllPlayer = (payload: any): ToggleDeleteAllPlayer => {
  return {type: Types.TOOGLE_MODAL_DELETE_ALL_PLAYERS, payload};
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
export const getSettingsFailure = (payload: any): GetSettingsFailure => {
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
export const saveSettingsFailure = (payload: any): SaveSettingsFailure => {
  return {type: Types.SAVE_SETTINGS_FAILURE, payload};
};
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export const getAllPlayersRequest = (): GetPlayersRequest => {
  return {type: Types.GET_PLAYERS_REQUEST};
};
export const getAllPlayersSuccess = (payload: IPlayer[]): GetPlayersSuccess => {
  return {type: Types.GET_PLAYERS_SUCCESS, payload};
};
export const getAllPlayersFailure = (payload: any): GetPlayersFailure => {
  return {type: Types.GET_PLAYERS_FAILURE, payload};
};
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export const addPlayerRequest = (payload: any): AddPlayerRequest => {
  return {type: Types.ADD_PLAYER_REQUEST, payload};
};
export const addPlayerSuccess = (payload: any): AddPlayerSuccess => {
  return {type: Types.ADD_PLAYER_SUCCESS, payload};
};
export const addPlayerFailure = (payload: any): AddPlayerFailure => {
  return {type: Types.ADD_PLAYER_FAILURE, payload};
};
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export const updatePlayerRequest = (payload: any): UpdatePlayerRequest => {
  return {type: Types.UPDATE_PLAYER_REQUEST, payload};
};
export const updatePlayerSuccess = (payload: any): UpdatePlayerSuccess => {
  return {type: Types.UPDATE_PLAYER_SUCCESS, payload};
};
export const updatePlayerFailure = (payload: any): UpdatePlayerFailure => {
  return {type: Types.UPDATE_PLAYER_FAILURE, payload};
};
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export const deletePlayerRequest = (payload: any): DeletePlayerRequest => {
  return {type: Types.DELETE_PLAYER_REQUEST, payload};
};
export const deletePlayerSuccess = (payload: any): DeletePlayerSuccess => {
  return {type: Types.DELETE_PLAYER_SUCCESS, payload};
};
export const deletePlayerFailure = (payload: any): DeletePlayerFailure => {
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
export const deleteAllPlayersFailure = (payload: any): DeleteAllPlayersFailure => {
  return {type: Types.DELETE_ALL_PLAYERS_FAILURE, payload};
};
