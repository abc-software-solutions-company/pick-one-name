import {Dispatch} from 'react';

import Database from '@/utils/database';
import CollectionPlayer, {IPlayer} from '@/utils/players';

import * as actions from './actions';
import {IAction} from './types';

const db = new Database('lucky.db');
const playerCollection = new CollectionPlayer(db);

export const getPlayers = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.getAllPlayersRequest());
  const resp = playerCollection.list();
  if (resp) {
    dispatch(actions.getAllPlayersSuccess(resp));
  } else {
    dispatch(actions.getAllPlayersFailure({message: "Can't get players."}));
  }
};

export const addPlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.addPlayerRequest(player));
  const resp = playerCollection.create(player);
  if (resp) {
    dispatch(actions.addPlayerSuccess(resp));
  } else {
    dispatch(actions.addPlayerFailure({message: "Can't add player."}));
  }
};

export const updatePlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.updatePlayerRequest(player));
  const resp = playerCollection.update(player);
  if (resp) {
    dispatch(actions.updatePlayerSuccess(resp));
  } else {
    dispatch(actions.updatePlayerFailure({message: "Can't update player."}));
  }
};

export const deletePlayer = (player: IPlayer) => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deletePlayerRequest(player));
  const resp = playerCollection.delete(player);
  if (resp) {
    dispatch(actions.deletePlayerSuccess(resp));
  } else {
    dispatch(actions.deletePlayerFailure({message: "Can't delete player."}));
  }
};

export const deleteAllPlayers = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actions.deleteAllPlayersRequest());
  try {
    playerCollection.clear();
    dispatch(actions.deleteAllPlayersSuccess());
  } catch (error) {
    dispatch(actions.deleteAllPlayersFailure(error));
  }
};
