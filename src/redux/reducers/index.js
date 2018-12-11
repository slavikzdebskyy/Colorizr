import { combineReducers } from 'redux';
import mainColorReducer from './main.color.reducer';

export default combineReducers ({
  mainColor: mainColorReducer  
})