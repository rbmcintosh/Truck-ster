import {combineReducers} from "redux";

function trucks(state = [], action) { 
  if (action.type === "TRUCKS_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  trucks
});

export default rootReducer;
