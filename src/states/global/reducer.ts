import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  const {type, payload} = action;

  switch (type) {
    case Types.OPEN_MENU:
      return {...state, isOpenMenu: payload.isOpenMenu};
    case Types.OPEN_DRAWER:
      return {...state, isOpenDrawer: payload.isOpenDrawer};
    default:
      return state;
  }
}
