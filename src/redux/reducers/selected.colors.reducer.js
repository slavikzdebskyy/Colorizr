const selectedColorsReducer = (state = [], action) => {
  switch(action.type) {

    case 'SELECT_DARK_LIGHT_ITEM':
      const index = state.indexOf(action.payload);
      if (index >= 0) {
        state.splice(index,1);
      } else {
        state.length === 10 ? state.shift().push(action.payload) : state.push(action.payload);
      }      
      return [...state];  

    case 'REMOVE_SELECTED_COLOR':
      const indexEl = state.indexOf(action.payload);
      state.splice(indexEl,1);
      return [...state];
    
    case 'SELECT_ALL_DARK_LIGHT_ITEM':
      const newState = []; 
      action.payload.forEach(item => newState.push(item.color));
      return [...newState];

    case 'REMOVE_ALL_DARK_LIGHT_ITEM':
      return [];

    default:
      return [...state];
  }
}
  
export default selectedColorsReducer;