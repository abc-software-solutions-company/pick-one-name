import {Dispatch} from 'react';
import Database from '@/localdb';
import PlayerController from '@/localdb/controllers/players.controller';
import SettingController from '@/localdb/controllers/settings.controller';
import {IPlayer} from '@/localdb/models/player.model';
import {ISetting} from '@/localdb/models/setting.model';
import {getErrorMessage} from '@/utils/error-handle';

import * as actions from './actions';
import {IAction} from './types';

const db = new Database('game.db');
const playerController = new PlayerController(db);
const settingController = new SettingController(db);

export const getSettings = () => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.getSettingsRequest());
  try {
    const resp = settingController.get();
    dispatch(actions.getSettingsSuccess(resp));
  } catch (error) {
    dispatch(actions.getSettingsFailure(getErrorMessage(error)));
  }
};

export const setSettings = (payload: ISetting) => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.saveSettingsRequest());
  try {
    const resp = settingController.set({...payload});
    dispatch(actions.saveSettingsSuccess(resp));
  } catch (error) {
    dispatch(actions.saveSettingsFailure(getErrorMessage(error)));
  }
};

export const getPlayers = () => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.getAllPlayersRequest());
  try {
    const resp = playerController.list();
    dispatch(actions.getAllPlayersSuccess(resp));
  } catch (error) {
    dispatch(actions.getAllPlayersFailure(getErrorMessage(error)));
  }
};

export const addPlayer = (payload: IPlayer) => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.addPlayerRequest());
  try {
    const resp = playerController.create(payload);
    dispatch(actions.addPlayerSuccess(resp));
  } catch (error) {
    dispatch(actions.addPlayerFailure(getErrorMessage(error)));
  }
};

export const updatePlayer = (payload: IPlayer) => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.updatePlayerRequest());
  try {
    const resp = playerController.update(payload);
    dispatch(actions.updatePlayerSuccess(resp));
  } catch (error) {
    dispatch(actions.updatePlayerFailure(getErrorMessage(error)));
  }
};

export const deletePlayer = (payload: IPlayer) => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deletePlayerRequest());
  try {
    const resp = playerController.delete(payload);
    dispatch(actions.deletePlayerSuccess(resp));
  } catch (error) {
    dispatch(actions.deletePlayerFailure(getErrorMessage(error)));
  }
};

export const deleteAllPlayers = () => async (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deleteAllPlayersRequest());
  try {
    playerController.clear();
    dispatch(actions.deleteAllPlayersSuccess());
  } catch (error) {
    dispatch(actions.deleteAllPlayersFailure(getErrorMessage(error)));
  }
};
