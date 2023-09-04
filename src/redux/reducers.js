// src/Redux/reducers.js
import { combineReducers } from 'redux';
import spaceXReducer from './spaceXSlice';

const rootReducer = combineReducers({
  spaceX: spaceXReducer,
});

export default rootReducer;
