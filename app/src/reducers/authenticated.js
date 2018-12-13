const initialState = false;

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return true;
    default:
      return state;
  }
};

export default authenticated;
