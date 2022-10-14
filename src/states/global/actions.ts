import {IActionOpenDrawer, IActionOpenMenu, Types} from './types';

export const setMenuOpen = (value: boolean): IActionOpenMenu => {
  return {type: Types.OPEN_MENU, payload: {isOpenMenu: value}};
};

export const setDrawerOpen = (value: boolean): IActionOpenDrawer => {
  return {type: Types.OPEN_DRAWER, payload: {isOpenDrawer: value}};
};
