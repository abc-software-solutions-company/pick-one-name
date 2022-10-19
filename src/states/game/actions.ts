import {
  IActionAddPlayerFailure,
  IActionAddPlayerRequest,
  IActionAddPlayerSuccess,
  IActionBackgroundMusic,
  IActionBackgroundMusicPayload,
  IActionDeleteAllPlayersFailure,
  IActionDeleteAllPlayersRequest,
  IActionDeleteAllPlayersSuccess,
  IActionDeletePlayerFailure,
  IActionDeletePlayerRequest,
  IActionDeletePlayerSuccess,
  IActionGetPlayersFailure,
  IActionGetPlayersRequest,
  IActionGetPlayersSuccess,
  IActionToggleSoundEffect,
  IActionToggleSoundEffectPayload,
  IActionUpdatePlayerFailure,
  IActionUpdatePlayerRequest,
  IActionUpdatePlayerSuccess,
  Types
} from './types';
// ======================================================================================================
// TOGGLE BACKGROUND MUSIC
// ======================================================================================================
export const setMusicOn = (payload: IActionBackgroundMusicPayload): IActionBackgroundMusic => {
  return {type: Types.TOGGLE_BACKGROUND_MUSIC, payload};
};
// ======================================================================================================
// TOOGLE SOUND EFFECT
// ======================================================================================================
export const setSoundEffectOn = (payload: IActionToggleSoundEffectPayload): IActionToggleSoundEffect => {
  return {type: Types.TOOGLE_SOUND_EFFECT, payload};
};
// ======================================================================================================
// GET ALL PLAYERS
// ======================================================================================================
export const getAllPlayersRequest = (): IActionGetPlayersRequest => ({
  type: Types.GET_PLAYERS_REQUEST
});
export const getAllPlayersSuccess = (payload: any): IActionGetPlayersSuccess => ({
  type: Types.GET_PLAYERS_SUCCESS,
  payload
});
export const getAllPlayersFailure = (payload: any): IActionGetPlayersFailure => ({
  type: Types.GET_PLAYERS_FAILURE,
  payload
});
// ======================================================================================================
// ADD PLAYER
// ======================================================================================================
export const addPlayerRequest = (payload: any): IActionAddPlayerRequest => ({type: Types.ADD_PLAYER_REQUEST, payload});
export const addPlayerSuccess = (payload: any): IActionAddPlayerSuccess => ({type: Types.ADD_PLAYER_SUCCESS, payload});
export const addPlayerFailure = (payload: any): IActionAddPlayerFailure => ({type: Types.ADD_PLAYER_FAILURE, payload});
// ======================================================================================================
// UPDATE PLAYER
// ======================================================================================================
export const updatePlayerRequest = (payload: any): IActionUpdatePlayerRequest => ({
  type: Types.UPDATE_PLAYER_REQUEST,
  payload
});
export const updatePlayerSuccess = (payload: any): IActionUpdatePlayerSuccess => ({
  type: Types.UPDATE_PLAYER_SUCCESS,
  payload
});
export const updatePlayerFailure = (payload: any): IActionUpdatePlayerFailure => ({
  type: Types.UPDATE_PLAYER_FAILURE,
  payload
});
// ======================================================================================================
// DELETE PLAYER
// ======================================================================================================
export const deletePlayerRequest = (payload: any): IActionDeletePlayerRequest => ({
  type: Types.DELETE_PLAYER_REQUEST,
  payload
});
export const deletePlayerSuccess = (payload: any): IActionDeletePlayerSuccess => ({
  type: Types.DELETE_PLAYER_SUCCESS,
  payload
});
export const deletePlayerFailure = (payload: any): IActionDeletePlayerFailure => ({
  type: Types.DELETE_PLAYER_FAILURE,
  payload
});
// ======================================================================================================
// DELETE ALL PLAYERS
// ======================================================================================================
export const deleteAllPlayersRequest = (): IActionDeleteAllPlayersRequest => ({
  type: Types.DELETE_ALL_PLAYERS_REQUEST
});
export const deleteAllPlayersSuccess = (): IActionDeleteAllPlayersSuccess => ({
  type: Types.DELETE_ALL_PLAYERS_SUCCESS
});
export const deleteAllPlayersFailure = (payload: any): IActionDeleteAllPlayersFailure => ({
  type: Types.DELETE_ALL_PLAYERS_FAILURE,
  payload
});
