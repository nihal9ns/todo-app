import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Auth from "./Auth";
import { addUser } from "../actions/todo";

const auth = new Auth();
class AuthCallback extends Component {
  componentDidMount() {
    auth.handleAuth();
    const email = localStorage.getItem("Auth0->email");

    if (email) {
      setTimeout(() => {
        this.props.addUser(email);
      }, 1000);
      window.location.href = "/";
    }
  }
  render() {
    return (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="Loading..."
        />
      </div>
    );
  }
}

AuthCallback.propTypes = {
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { addUser }
)(AuthCallback);
