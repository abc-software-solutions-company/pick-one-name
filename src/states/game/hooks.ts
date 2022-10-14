import {useContext} from 'react';

import {Context, DispatchContext} from './context';

export function useGameState() {
  const context = useContext(Context);
  if (context === undefined) throw new Error('useGameState must be used within a GameProvider');
  return context;
}

export function useGameDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error('useGameDispatch must be used within a GameProvider');
  return context;
}
