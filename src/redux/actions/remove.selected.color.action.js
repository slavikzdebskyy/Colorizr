import { REMOVE_SELECTED_COLOR } from './all.actions';

const removeSelectedColor = color => dispatch => {
  return dispatch({type: REMOVE_SELECTED_COLOR, payload: color});
}

export default removeSelectedColor;