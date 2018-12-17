import React from "react";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import DifficultyModal from "./DifficultyModal";


function ModalController(props) {
  switch (props.activeModal) {
    case "LoginModal":
      return <LoginModal />;
    case "SignUpModal":
      return <SignUpModal />;
    case "DifficultyModal":
      return <DifficultyModal />;
    default:
      return null;
  }
}

function mapStateToProps(state) {
  return {
    activeModal: state.modal
  }
}

export default connect(mapStateToProps, null)(ModalController);
