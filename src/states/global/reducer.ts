import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  const {type, payload} = action;

  switch (type) {
    case Types.TOGGLE_MENU:
      return {...state, isOpenMenu: payload};
    case Types.TOGGLE_DRAWER:
      return {...state, isOpenDrawer: payload};
    default:
      return state;
  }
}
