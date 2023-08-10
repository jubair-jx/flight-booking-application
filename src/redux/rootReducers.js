import { combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers({
  bookings: reducers,
});
export default rootReducer;
