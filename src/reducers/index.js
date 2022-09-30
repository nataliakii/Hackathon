import { combineReducers } from '@reduxjs/toolkit';
import dogReducer from './dog-reducer';
import ageReducer from './age-reducer';
import artworkReducer from './artwork-reducer';

const rootReducer = combineReducers({
  age: ageReducer,
  artwork: artworkReducer,
  dog: dogReducer,
});

export default rootReducer;
