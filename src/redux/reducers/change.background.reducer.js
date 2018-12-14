const initState = {
  isDarkBgDarker : false,
  isDarkBgMixed : false
}

const changeBgReducer = (state = initState, action) => {
  switch(action.type) {

    case 'CHANGE_BG_DARKER':
      state.isDarkBgDarker = !state.isDarkBgDarker;
      return state;  

    case 'CHANGE_BG_MIXED':
      state.isDarkBgMixed = !state.isDarkBgMixed;
      return state;    

    default:
      return state;
  }
}
  
export default changeBgReducer;