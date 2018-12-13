import React, { useState } from "react";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";
import { authenticateUser } from "../../actions";
import Axios from "axios";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("clicked");
    Axios.post("/v1/signin", {
      email,
      password
    }).then(res => {
      console.log(res.data);
      props.closeModal();
      props.authorize();
    });
  }

  return (
    <Modal>
      <Card>
        <Header>Login!</Header>
        <Content>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="johndoe@gmail.com"
              className="input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              placeholder="password"
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="has-text-right">
            <button onClick={handleSubmit} className="button is-primary">
              Login
            </button>
          </div>
        </Content>
      </Card>
    </Modal>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    closeModal() {
      dispatch(toggleModal());
    },
    authorize() {
      dispatch(authenticateUser());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
