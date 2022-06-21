const initial_state = {
  user: null,
};

const authReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default authReducer;
