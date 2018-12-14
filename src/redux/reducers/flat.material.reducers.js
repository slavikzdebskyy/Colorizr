import { flat, material } from '../../data';

export const flatReducer = (state = flat, action) => {
  switch (action.type) {

    case 'SELECT_FLAT_ITEM':
      state.forEach(item => {
        if (item.color === action.payload) {
          item.selected = !item.selected;
        }
      })
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

export const materialReducer = (state = material, action) => {
  switch (action.type) {

    case 'SELECT_MATERIAL_ITEM':
      state.forEach(item => {
        if (item.color === action.payload) {
          item.selected = !item.selected;
        }
      })
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