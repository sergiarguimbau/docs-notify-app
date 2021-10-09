import { combineReducers } from 'redux';

// Import Reducers
import mainReducer from '../modules/main/MainState';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;