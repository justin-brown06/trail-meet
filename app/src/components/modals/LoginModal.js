import React, {useState} from "react";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal>
      <Card>
        <Header>Login!</Header>
        <Content>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input 
              placeholder="johndoe@gmail.com" 
              className="input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text" />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input 
              placeholder="password" 
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password" />
          </div>
          <div className="has-text-right">
            <button className="button is-primary">Login</button>
          </div>
        </Content>
      </Card>
    </Modal>
  );
}

export default (LoginModal);
