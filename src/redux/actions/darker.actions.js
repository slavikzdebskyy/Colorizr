import { 
  CHANGE_DARKER_ARRAY, 
  SELECT_DARKER_ITEM,
  SELECT_ALL_DARKER_ITEMS,
  REMOVE_ALL_DARKER_ITEMS } from './all.actions';

export const changeDarkLightAction = array => dispatch => {
  return dispatch({type: CHANGE_DARKER_ARRAY, payload: array});
}

export const selectDarkLightAction = color => dispatch => {
  return dispatch({type: SELECT_DARKER_ITEM, payload: color});
}

export const selectAllDarkLightAction = array => dispatch => {
  return dispatch({type: SELECT_ALL_DARKER_ITEMS, payload: array});
}

export const removeAllDarkLightAction = () => dispatch => {
  return dispatch({type: REMOVE_ALL_DARKER_ITEMS});
}