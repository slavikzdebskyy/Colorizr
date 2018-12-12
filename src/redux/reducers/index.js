import { combineReducers } from 'redux';
import mainColorReducer from './main.color.reducer';
import darkLightReducer from './dark.light.reducer';
import selectedColorsReducer from './selected.colors.reducer';

export default combineReducers ({
  mainColor: mainColorReducer,
  darkAndLight: darkLightReducer,
  selectedColors: selectedColorsReducer
})