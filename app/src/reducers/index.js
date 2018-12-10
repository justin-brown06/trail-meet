import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from "./count";
import modal from "./modal";

export default combineReducers({
  todos,
  visibilityFilter,
  count,
  modal
});