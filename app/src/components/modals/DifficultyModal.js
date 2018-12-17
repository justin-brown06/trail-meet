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
                <Header>Difficulty Legend:</Header>
                <Content>
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <h3>Easy = &nbsp;
                                    <img className="icon" src={green} alt="green" /> </h3>
                        </div>
                        <div className="column is-narrow">
                            <h3>Intermediate = &nbsp;
                                    <img className="icon" src={blue} alt="blue" /></h3>
                        </div>
                        <div className="column is-narrow">
                            <h3>Difficult = &nbsp;
                                    <img className="icon" src={black} alt="black" /> </h3>
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
