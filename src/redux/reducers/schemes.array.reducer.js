import { presetns } from '../../data';

const schemesArrayReducer = (state = presetns, action) => {
  switch (action.type) {

    case 'SELECT_SCHEME_ITEM':
      state.forEach(item => item.selected = item.name === action.payload.name)
      return [...state];    
   
    default:
     return [...state];
  }
}

export default schemesArrayReducer;

