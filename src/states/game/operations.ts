import {Dispatch} from 'react';

import Database from '@/localdb';
import {IPlayer} from '@/localdb/models/player.model';
import {ISetting} from '@/localdb/models/setting.model';
import PlayerController from '@/localdb/controllers/players.controller';
import SettingController from '@/localdb/controllers/settings.controller';
import {getErrorMessage} from '@/utils/error-handle';

import * as actions from './actions';
import {IAction} from './types';

const db = new Database('game.db');
const playerController = new PlayerController(db);
const settingController = new SettingController(db);

export const getSettings = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.getSettingsRequest());
  try {
    const settings = settingController.get();
    dispatch(actions.getSettingsSuccess(settings));
  } catch (error) {
    dispatch(actions.getSettingsFailure(getErrorMessage(error)));
  }
};

export const setSettings = (settings: ISetting) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.saveSettingsRequest());
  try {
    const resp = settingController.set({...settings});
    dispatch(actions.saveSettingsSuccess(resp));
  } catch (error) {
    dispatch(actions.saveSettingsFailure(getErrorMessage(error)));
  }
};

export const getPlayers = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.getAllPlayersRequest());
  try {
    const resp = playerController.list();
    dispatch(actions.getAllPlayersSuccess(resp));
  } catch (error) {
    dispatch(actions.getAllPlayersFailure(getErrorMessage(error)));
  }
};

export const addPlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.addPlayerRequest(player));
  try {
    const resp = playerController.create({...player});
    dispatch(actions.addPlayerSuccess(resp));
  } catch (error) {
    dispatch(actions.addPlayerFailure(getErrorMessage(error)));
  }
};

export const updatePlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.updatePlayerRequest(player));
  try {
    const resp = playerController.update({...player});
    dispatch(actions.updatePlayerSuccess(resp));
  } catch (error) {
    console.log('updatePlayerFailure', error);
    dispatch(actions.updatePlayerFailure(getErrorMessage(error)));
  }
};

export const deletePlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deletePlayerRequest(player));
  try {
    const resp = playerController.delete(player);
    dispatch(actions.deletePlayerSuccess(resp));
  } catch (error) {
    dispatch(actions.deletePlayerFailure(getErrorMessage(error)));
  }
};

export const deleteAllPlayers = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deleteAllPlayersRequest());
  try {
    playerController.clear();
    dispatch(actions.deleteAllPlayersSuccess());
  } catch (error) {
    dispatch(actions.deleteAllPlayersFailure(getErrorMessage(error)));
  }
};
