import { SELECT_FLAT_ITEM, SELECT_MATERIAL_ITEM } from './all.actions';

export const selectFlatItemAction = color => dispatch => {
  return dispatch({type: SELECT_FLAT_ITEM, payload: color});
}

export const selectMaterialItemAction = color => dispatch => {
  return dispatch({type: SELECT_MATERIAL_ITEM, payload: color});
}