export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const logInUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOG_IN_REQUEST });
    try {
      const response = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(
          "Failed to log in" + response.statusText + " " + response.status
        );
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: { email: credentials.email, token: data.token },
      });
    } catch (e) {
      dispatch({
        type: LOG_IN_FAILURE,
        error: true,
      });
    }
  };
};

export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3002/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong. Try to log in again!");
      }
      const data = await response.json();
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        error: true,
      });
    }
  };
};

export const logOutUser = () => {
  localStorage.removeItem("token");
  return {
    type: LOG_OUT,
  };
};
