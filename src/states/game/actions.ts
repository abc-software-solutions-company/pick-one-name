import {IActionMusicOn, IActionSoundEffectOn, Types} from './types';

export const setMusicOn = (value: boolean): IActionMusicOn => {
  return {type: Types.TOGGLE_MUSIC, payload: {isMusicOn: value}};
};

export const setSoundEffectOn = (value: boolean): IActionSoundEffectOn => {
  return {type: Types.TOOGLE_SOUND_EFFECT, payload: {isSoundEffectOn: value}};
};
