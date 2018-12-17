import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const RequireAuth = ComposedComponent => {
  class Authentication extends React.Component {
    // Check before components
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    };

    // Compare new props coming in
    componentWillUpdate(nextProps) {
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };

  const mapStateToProps = state => {
    return {
      authenticated: state.authenticated
    };
  };

  return connect(
    mapStateToProps,
    null
  )(withRouter(Authentication));
};

export default RequireAuth;