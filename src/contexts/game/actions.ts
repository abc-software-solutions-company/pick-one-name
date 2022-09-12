import * as types from './types';

interface IActionMenu {
  type: typeof types.OPEN_MAINMENU;
  payload: {
    isMenuOpen: boolean;
  };
}

interface IActionDrawer {
  type: typeof types.OPEN_DRAWER;
  payload: {
    isDrawerOpen: string;
  };
}

export const setMenuOpen = (isMenuOpen: boolean): IActionMenu => {
  return {type: types.OPEN_MAINMENU, payload: {isMenuOpen}};
};

export const setDrawerOpen = (isDrawerOpen: string): IActionDrawer => {
  return {type: types.OPEN_DRAWER, payload: {isDrawerOpen}};
};

export type IAction = IActionMenu | IActionDrawer;
