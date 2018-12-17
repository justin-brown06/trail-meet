import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";
import green from "../../assets/green-icon.png"
import blue from "../../assets/blue-icon.png"
import black from "../../assets/black-icon.png"


function DifficultyModal(props) {
    return (
        <Modal>
            <Card>
                <Header>Difficulty!</Header>
                <Content>
                    <div className="app">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-narrow">
                                <h3>Easy:
                                <img className="icon" src={green}/> </h3>
                                </div>
                                <div className="column is-narrow">
                                <h3>Intermediate:
                                <img className="icon" src={blue}/></h3>
                                </div>
                                <div className="column is-narrow">
                                <h3>Difficult:
                                <img className="icon" src={black}/> </h3>
                                </div>
                            </div>
                        </div>
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
)(DifficultyModal);
