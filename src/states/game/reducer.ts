import {IAction, IState, Types} from './types';

export default function reducer(state: IState, action: IAction): IState {
  const {type, payload} = action;

  switch (type) {
    case Types.TOGGLE_MUSIC:
      return {...state, isMusicOn: payload.isMusicOn};
    case Types.TOOGLE_SOUND_EFFECT:
      return {...state, isSoundEffectOn: payload.isSoundEffectOn};
    default:
      return state;
  }
}
