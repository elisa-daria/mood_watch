import { LOG_IN, LOG_OUT } from "../actions/userAction";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.email,
        token: action.payload.token,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
export default userReducer;
