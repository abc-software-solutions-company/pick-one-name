import {ToggleDrawer, ToggleMenu, Types} from './types';

export const toggleMenu = (payload: boolean): ToggleMenu => {
  return {type: Types.TOGGLE_MENU, payload};
};

export const toggleDrawer = (payload: boolean): ToggleDrawer => {
  return {type: Types.TOGGLE_DRAWER, payload};
};
