import {createContext, Dispatch, useContext} from 'react';

import * as actions from './actions';
import initialState from './state';
import {IAction, IState} from './types';

export const Context = createContext<IState>(initialState);
export const DispatchContext = createContext<Dispatch<IAction>>(() => null);

function useGameState() {
  const context = useContext(Context);
  if (context === undefined) throw new Error('useGameState must be used within a GameProvider');
  return context;
}

function useGameDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error('useGameDispatch must be used within a GameProvider');
  return context;
}

export function useGame() {
  const state = useGameState();
  const dispatch = useGameDispatch();
  return {state, dispatch, ...actions};
}
