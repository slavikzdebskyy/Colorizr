const selectedColorsReducer = (state = [], action) => {  
  switch(action.type) {

    case 'SELECT_DARKER_ITEM':
      if (state.includes(action.payload)) {
        return [...state.filter(item => item !== action.payload)];
      } else {
        state.push(action.payload); 
        return state.length >= 10 ? [...state.slice(state.length - 10, state.length)] : [...state];
      }    

    case 'REMOVE_SELECTED_COLOR':
      return [...state.filter(item => item !== action.payload)];
    
    case 'SELECT_ALL_DARKER_ITEMS':
      const newDarkerState = []; 
      action.payload.forEach(item => newDarkerState.push(item.color));
      return [...newDarkerState];

    case 'REMOVE_ALL_DARKER_ITEMS':
      return [];
    
    case 'SELECT_MIXED_ITEM':
      if (state.includes(action.payload)) {
        return [...state.filter(item => item !== action.payload)];
      } else {
        state.push(action.payload); 
        return state.length >= 10 ? [...state.slice(state.length - 10, state.length)] : [...state];
      } 
      
    case 'SELECT_FLAT_ITEM':
      if (state.includes(action.payload)) {
        return [...state.filter(item => item !== action.payload)];
      } else {
        state.push(action.payload); 
        return state.length >= 10 ? [...state.slice(state.length - 10, state.length)] : [...state];
      } 
    
    case 'SELECT_MATERIAL_ITEM':
      if (state.includes(action.payload)) {
        return [...state.filter(item => item !== action.payload)];
      } else {
        state.push(action.payload); 
        return state.length >= 10 ? [...state.slice(state.length - 10, state.length)] : [...state];
      } 
    
    case 'SELECT_ALL_MIXED_ITEMS':
      const newMixedState = []; 
      action.payload.forEach(item => newMixedState.push(item.color));
      return [...newMixedState];

    case 'SELECT_SCHEME_ITEM':
      return [...action.payload.colors]; 

    case 'REMOVE_ALL_MIXED_ITEMS':
      return [];

    default:
      return [...state];
  }
}
  
export default selectedColorsReducer;