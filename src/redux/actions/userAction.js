export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logInUser = (user) => {
  return {
    type: LOG_IN,
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: LOG_OUT,
  };
};
