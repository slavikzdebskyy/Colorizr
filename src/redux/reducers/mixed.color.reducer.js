const mixedColorReducer = (state = '#f1eb1a', action) => { 
  return action.type === 'CHANGE_MIXED_COLOR' ? action.payload : state;
}
  
export default mixedColorReducer;