export enum Types {
  TOGGLE_MENU = 'global/TOGGLE_MENU',
  TOGGLE_DRAWER = 'global/TOGGLE_DRAWER'
}

export interface IState {
  isOpenMenu: boolean;
  isOpenDrawer: boolean;
}

export type ToggleMenu = {type: typeof Types.TOGGLE_MENU; payload: boolean};
export type ToggleDrawer = {type: typeof Types.TOGGLE_DRAWER; payload: boolean};

export type IAction = ToggleMenu | ToggleDrawer;
