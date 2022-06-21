const initial_state = {
  user: null,
  authenticated: false,
};

const authReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };

    case "SET_AUTHENTICATED":
      return { ...state, authenticated: payload };

    default:
      return state;
  }
};

export default authReducer;
