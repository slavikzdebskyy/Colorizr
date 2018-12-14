import Color from 'color';

const initState = {
  color : '#3b97d3',
  isLight : true
}

const mainColorReducer = (state = initState, action) => {
  switch (action.type) {

    case 'CHANGE_MAIN_COLOR':
      const color = Color(action.payload);
      return { color : action.payload, isLight : color.isLight() };

    default:
      return state;
      
  }  
}
  
export default mainColorReducer;