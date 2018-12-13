import { CHANGE_BG_DARKER, CHANGE_BG_MIXED } from './all.actions';

export const changeBgDarkLightAction = () => dispatch => {
  return dispatch({type: CHANGE_BG_DARKER});
}

export const changeBgMixedAction = () => dispatch => {
  return dispatch({type: CHANGE_BG_MIXED});
}