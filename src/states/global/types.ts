export enum Types {
  OPEN_MENU = 'global/OPEN_MENU',
  OPEN_DRAWER = 'global/OPEN_DRAWER'
}

export interface IState {
  isOpenMenu: boolean;
  isOpenDrawer: boolean;
}

export interface IActionOpenMenu {
  type: typeof Types.OPEN_MENU;
  payload: {
    isOpenMenu: boolean;
  };
}

export interface IActionOpenDrawer {
  type: typeof Types.OPEN_DRAWER;
  payload: {
    isOpenDrawer: boolean;
  };
}

export type IAction = IActionOpenMenu | IActionOpenDrawer;
