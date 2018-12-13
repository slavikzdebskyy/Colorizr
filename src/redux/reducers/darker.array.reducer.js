import { getDarkerArray } from '../../func/functions';

const initState = getDarkerArray('#3b97d3');

const darkerArrayReducer = (state = initState, action) => {
  switch(action.type) {

    case 'CHANGE_DARKER_ARRAY':
      return action.payload;

    case 'SELECT_DARKER_ITEM':
      state.forEach(item => {
        if (item.color === action.payload) {
          item.selected = !item.selected;
        }
      })
      return [...state];

    case 'SELECT_ALL_DARKER_ITEMS':
      state.forEach(item => item.selected = true);
      return [...state];

    case 'REMOVE_ALL_DARKER_ITEMS':
      state.forEach(item => item.selected = false);
      return [...state];

    case 'REMOVE_SELECTED_COLOR':
      state.forEach(item => {
        if (item.selected && item.color === action.payload) {
          item.selected = false;
        }
      });
      return [...state];

    default:
      return [...state];
  }
}
  
export default darkerArrayReducer;