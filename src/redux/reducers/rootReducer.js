import { combineReducers } from 'redux';
import mainPageReducer from "./mainPage";
import photoReducer from "./photo";

export default combineReducers( {
  mainPage: mainPageReducer,
  photo: photoReducer
} );