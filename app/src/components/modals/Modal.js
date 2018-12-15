import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";

function Modal(props) {
  return (
    <div className="modal is-active">
      <div onClick={props.closeModal} className="modal-background is-small" />
      <div className="modal-content">{props.children}</div>
      <button
        onClick={props.closeModal}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal() {
      dispatch(toggleModal());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Modal);
