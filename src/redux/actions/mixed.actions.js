import { 
  CHANGE_MIXED_ARRAY, 
  SELECT_MIXED_ITEM,
  SELECT_ALL_MIXED_ITEMS,
  REMOVE_ALL_MIXED_ITEMS } from './all.actions';

export const changeMixedArrayAction = array => dispatch => {
  return dispatch({type: CHANGE_MIXED_ARRAY, payload: array});
}

export const selectMixedAction = color => dispatch => {
  return dispatch({type: SELECT_MIXED_ITEM, payload: color});
}

export const selectAllMixedAction = array => dispatch => {
  return dispatch({type: SELECT_ALL_MIXED_ITEMS, payload: array});
}

export const removeAllmixedAction = () => dispatch => {
  return dispatch({type: REMOVE_ALL_MIXED_ITEMS});
}