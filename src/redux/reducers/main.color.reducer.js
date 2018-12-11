const mainColorReducer = (state = '#fff', action) => {
  return action.type === 'CHANGE_MAIN_COLOR' ? action.payload : state;
}
  
export default mainColorReducer;