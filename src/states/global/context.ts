import {createContext, Dispatch, useContext} from 'react';

import * as globalActions from './actions';
import initialState from './state';
import {IAction, IState} from './types';

export const Context = createContext<IState>(initialState);
export const DispatchContext = createContext<Dispatch<IAction>>(() => null);

function useGlobalState() {
  const context = useContext(Context);
  if (context === undefined) throw new Error('useGlobalState must be used within a GlobalProvider');
  return context;
}

function useGlobalDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error('useGlobalDispatch must be used within a GlobalProvider');
  return context;
}

export function useGlobal() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  return {state, dispatch, ...globalActions};
}
