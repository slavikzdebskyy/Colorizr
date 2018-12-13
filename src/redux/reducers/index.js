import { combineReducers } from 'redux';
import mainColorReducer from './main.color.reducer';
import darkerArrayReducer from './darker.array.reducer';
import selectedColorsReducer from './selected.colors.reducer';
import changeBgReducer from './change.background.reducer';
import mixedColorReducer from './mixed.color.reducer';
import mixedArrayReducer from './mixed.array.reducer';

export default combineReducers ({
  mainColor : mainColorReducer,
  mixedColor : mixedColorReducer,
  darkerArray : darkerArrayReducer,
  selectedColors : selectedColorsReducer,
  isDarkBg : changeBgReducer,
  mixedArray : mixedArrayReducer
})