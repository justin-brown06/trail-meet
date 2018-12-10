const initialState = "";

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODAL":
      return action.payload;
    default:
      return state;
  }
};

export default modal;
