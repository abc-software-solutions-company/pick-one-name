/* eslint-disable react/jsx-filename-extension */
import {createContext, useContext, useReducer} from 'react';

const AppContext = createContext();
const AppDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MAINMENU': {
      state.menuVisible = action.payload.menuVisible;
      return {...state};
    }

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {menuVisible: false});
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useAppDispatchContext = () => useContext(AppDispatchContext);
