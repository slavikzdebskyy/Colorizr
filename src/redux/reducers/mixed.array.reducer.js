import { getMixedArray } from './../../func/functions';

const initState = getMixedArray('#3b97d3', '#f1eb1a');

const mixedArrayReducer = (state = initState, action) => {
  switch(action.type) {

    case 'CHANGE_MIXED_ARRAY':
      return action.payload;

    case 'SELECT_MIXED_ITEM':
      state.forEach(item => {
        if (item.color === action.payload) {
          item.selected = !item.selected;
        }
      })
      return [...state];

    case 'SELECT_ALL_MIXED_ITEMS':
      state.forEach(item => item.selected = true);
      return [...state];

    case 'REMOVE_ALL_MIXED_ITEMS':
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
  
export default mixedArrayReducer;