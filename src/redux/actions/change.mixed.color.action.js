import { CHANGE_MIXED_COLOR } from './all.actions';

const changeMixedColorAction = color => dispatch => {
  return dispatch({type: CHANGE_MIXED_COLOR, payload: color});
}

export default changeMixedColorAction;