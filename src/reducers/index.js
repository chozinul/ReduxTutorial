import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import historyReducer from './historyReducer';

const counterApp = combineReducers({
  counterReducer,
  historyReducer
})

export default counterApp