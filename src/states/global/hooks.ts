import {useContext} from 'react';

import {Context, DispatchContext} from './context';

export function useGlobalState() {
  const context = useContext(Context);
  if (context === undefined) throw new Error('useGlobalState must be used within a GlobalProvider');
  return context;
}

export function useGlobalDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error('useGlobalDispatch must be used within a GlobalProvider');
  return context;
}
