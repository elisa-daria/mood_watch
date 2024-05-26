// import { LOG_IN, LOG_OUT } from "../actions/userAction";

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
} from "../actions/userAction";

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOG_IN:
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.email,
//         token: action.payload.token,
//       };
//     case LOG_OUT:
//       return initialState;
//     default:
//       return state;
//   }
// };
// export default userReducer;

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.email,
        token: action.payload.token,
        isLoading: false,
        error: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: false,
        isAuthenticated: true,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
export default userReducer;
