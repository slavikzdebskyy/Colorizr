import { CHANGE_MAIN_COLOR } from './all.actions';

const changeMainColorAction = color => dispatch => {
  return dispatch({type: CHANGE_MAIN_COLOR, payload: color});
}

export default changeMainColorAction;