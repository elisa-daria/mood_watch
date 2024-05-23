import { combineReducers, configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../reducers/watchlist";
import userReducer from "../reducers/userReducer";

const mainReducer = combineReducers({
  watchlist: watchListReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
