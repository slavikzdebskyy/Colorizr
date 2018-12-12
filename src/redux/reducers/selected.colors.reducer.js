const selectedColorsReducer = (state = [], action) => {
  switch(action.type) {

    case 'ADD_SELECTED_COLOR':
      if (state.length === 10) {
        state.shift().push(action.payload);
       } else {
         state.push(action.payload);
       }
       return state;     

    default:
      return state;
  }
}
  
export default selectedColorsReducer;