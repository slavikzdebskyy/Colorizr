export const changeDarkLightAction = array => dispatch => {
  return dispatch({type: 'CHANGE_DARK_LIGHT_ARRAY', payload: array});
}

export const selectDarkLightAction = color => dispatch => {
  return dispatch({type: 'SELECT_DARK_LIGHT_ITEM', payload: color});
}

export const selectAllDarkLightAction = (array) => dispatch => {
  return dispatch({type: 'SELECT_ALL_DARK_LIGHT_ITEM', payload: array});
}

export const removeAllDarkLightAction = () => dispatch => {
  return dispatch({type: 'REMOVE_ALL_DARK_LIGHT_ITEM'});
}