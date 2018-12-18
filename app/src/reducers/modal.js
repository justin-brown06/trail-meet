const initialState = "";

const modal = (state = initialState, action) => {
  // console.log("MODAL REDUCER", action);
  switch (action.type) {
    case "CHANGE_MODAL":
      return action.payload;
    default:
      return state;
  }
};

export default modal;
