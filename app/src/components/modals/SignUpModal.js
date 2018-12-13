import React, { useState } from "react";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";

import Axios from "axios";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    Axios.post("/v1/signup", {
      email,
      password,
      firstName,
      lastName
    }).then(res => {
      console.log(res.data);
      props.closeModal();
    });
  }

  return (
    <Modal>
      <Card>
        <Header>Create an Account!</Header>
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
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              placeholder="John"
              className="input"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              placeholder="Doe"
              className="input"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Password"
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <div className="has-text-right">
            <button onClick={props.closeModal} className="button is-primary">
              Cancel
            </button>
            <button onClick={handleSubmit} className="button is-primary">
              Sign Up
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
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignUpModal);