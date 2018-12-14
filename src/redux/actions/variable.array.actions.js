import { INIT_VARIABLES_ARRAY, CHANGE_VARIABLE } from './all.actions';

export const initVariatablesAction = array => dispatch => {
  return dispatch({type: INIT_VARIABLES_ARRAY, payload: array});
}

export const changeVariableAction = data => dispatch => {
  return dispatch({type: CHANGE_VARIABLE, payload: data});
}