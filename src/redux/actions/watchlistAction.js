export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToWatchList = (detail, media_type) => {
  return {
    type: ADD_TO_LIST,
    payload: {
      name: detail.name || detail.title,
      tagline: detail.tagline || "Wow! Great tagline",
      id: detail.id,
      media_type,
    },
  };
};
export const removeFromWatchList = (id) => {
  return {
    type: REMOVE_FROM_LIST,
    payload: id,
  };
};
