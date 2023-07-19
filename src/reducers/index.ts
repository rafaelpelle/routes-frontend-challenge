import { combineReducers } from 'redux';
import resultsReducer from './results';

const rootReducer = combineReducers({
  resultsReducer,
});

export default rootReducer;
