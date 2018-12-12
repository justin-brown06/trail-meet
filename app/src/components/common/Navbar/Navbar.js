import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleModal } from "./../../../actions";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.PNG";
import "./style.css"

function Navbar(props) {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">      
          <img alt="header-logo" id="logo" src={logo} />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/savedHikes" className="navbar-item">Saved Hikes</Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button onClick={props.signUpModal}className="button is-link">
              <strong>Sign up</strong>
            </button>
            <button onClick={props.loginModal} className="button is-link">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    loginModal() {
      dispatch(toggleModal("LoginModal"));
    },
    signUpModal(){
      dispatch(toggleModal("SignUpModal"));
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar);