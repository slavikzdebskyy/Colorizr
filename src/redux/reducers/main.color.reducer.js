const mainColorReducer = (state = '#3b97d3', action) => {
  return action.type === 'CHANGE_MAIN_COLOR' ? action.payload : state;
}
  
export default mainColorReducer;