import { SELECT_SCHEME_ITEM } from './all.actions';

const selectSchemeItemAction = scheme => dispatch => {
  return dispatch({type: SELECT_SCHEME_ITEM, payload: scheme});
}

export default selectSchemeItemAction;