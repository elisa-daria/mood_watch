import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions/watchlistAction";

const initialState = {
  content: [],
};
const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_LIST:
      return {
        content: state.content.filter((media) => media.id !== action.payload),
      };
    default:
      return state;
  }
};
export default watchListReducer;
