const changeMainColorAction = data => dispatch => {
  return dispatch({type: 'CHANGE_MAIN_COLOR', payload: data.color});
}

export default changeMainColorAction;