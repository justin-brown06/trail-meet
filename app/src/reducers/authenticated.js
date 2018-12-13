const initialState = false;

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return action.payload;
    default:
      return state;
  }
};

export default authenticated;
