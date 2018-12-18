import React from "react";
import { connect } from "react-redux";
import { toggleModal, authenticateUser, } from "./../../../actions";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.PNG";

function hide () {
 let signUp = document.getElementById("signUp");
 let logIn = document.getElementById("logIn");
 signUp.classList.add("is-hidden");
 logIn.classList.add("is-hidden");
}

if(authenticateUser === true) {
  hide();
 }


function Navbar(props) {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img alt="header-logo" id="logo" src={logo} />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-brand nav-left">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/savedHikes" className="navbar-item">
            Saved Hikes
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button id="signUp" onClick={props.signUpModal} className="button is-info">
              <strong>Sign up</strong>
            </button>
            <button id="logIn" onClick={props.loginModal} className="button is-info">
              Log in
            </button>
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
    signUpModal() {
      dispatch(toggleModal("SignUpModal"));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
