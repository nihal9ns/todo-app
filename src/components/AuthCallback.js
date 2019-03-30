import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authCall } from "../actions/todo";

class AuthCallback extends Component {
  componentDidMount() {
    this.props.authCall();
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
  authCall: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { authCall }
)(AuthCallback);
