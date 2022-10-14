export enum Types {
  TOGGLE_MUSIC = 'game/TOGGLE_MUSIC',
  TOOGLE_SOUND_EFFECT = 'game/TOOGLE_SOUND_EFFECT'
}

export interface IState {
  isMusicOn: boolean;
  isSoundEffectOn: boolean;
}

export interface IActionMusicOn {
  type: typeof Types.TOGGLE_MUSIC;
  payload: {
    isMusicOn: boolean;
  };
}

export interface IActionSoundEffectOn {
  type: typeof Types.TOOGLE_SOUND_EFFECT;
  payload: {
    isSoundEffectOn: boolean;
  };
}

export type IAction = IActionMusicOn | IActionSoundEffectOn;
