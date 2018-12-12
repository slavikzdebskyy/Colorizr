const changeDarkLightAction = array => dispatch => {
  return dispatch({type: 'CHANGE_DARK_LIGHT_ARRAY', payload: array});
}

export default changeDarkLightAction;