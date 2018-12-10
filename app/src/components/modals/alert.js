import React, { useState } from "react";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";

class Login extends Component {

}

render() {
    return (
        <Modal>
            <Card>
               <Header>Add Your Zipcode</Header>
                <Content>
                    <div className="notification">
                        <button className="delete"></button>
                        <div className="field">
                            <div className="control">
                                <input className="input is-success" type="text" placeholder="Enter Zipcode"></input>
                            </div>
                        </div>
                      <input type="submit"> Submit </input>
                    </div>
                </Content>
            </Card>
        </Modal>
    )
};