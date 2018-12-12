const selectDarkLightAction = index => dispatch => {
  return dispatch({type: 'SELECT_DARK_LIGHT_ITEM', payload: index});
}

export default selectDarkLightAction;