const addSelectedColor = color => dispatch => {
  return dispatch({type: 'ADD_SELECTED_COLOR', payload: color});
}

export default addSelectedColor;