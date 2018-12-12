import getDarkenArray from './../../func/get.darken.array';

const initState = getDarkenArray('#3b97d3');

const darkLightReducer = (state = initState, action) => {
  switch(action.type) {

    case 'CHANGE_DARK_LIGHT_ARRAY':
      return action.payload;

    case 'SELECT_DARK_LIGHT_ITEM':
      state[action.payload].selected = !state[action.payload].selected
      return [...state ]

    default:
      return state;
  }
}
  
export default darkLightReducer;