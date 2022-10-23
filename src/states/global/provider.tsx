import React, {FC, ReactNode, useReducer} from 'react';

import {Context, DispatchContext} from './context';
import reducer from './reducer';
import initialState from './state';

interface IGlobalProviderProps {
  children: ReactNode;
}

const Provider: FC<IGlobalProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export default Provider;
