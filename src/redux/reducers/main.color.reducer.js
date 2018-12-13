import Color from 'color';

const initState = {
  color : '#3b97d3',
  isLight : true
}

const mainColorReducer = (state = initState, action) => {
  const color = Color(action.payload);  
  return action.type === 'CHANGE_MAIN_COLOR' ? { color : action.payload, isLight : color.isLight() } : state;
}
  
export default mainColorReducer;