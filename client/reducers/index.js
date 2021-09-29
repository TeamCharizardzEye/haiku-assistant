import { combineReducers } from 'redux';

// import all reducers here
import haikusReducer from './haikuReducer';

// combine reducers
const reducers = combineReducers({
  haikus: haikusReducer,
});

export default reducers;
