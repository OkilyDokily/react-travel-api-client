import { combineReducers } from 'redux';

export default combineReducers({
  security: require('./security').default
  //interface: require('./interface').default
});