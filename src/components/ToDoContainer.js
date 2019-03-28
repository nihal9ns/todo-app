import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";
import Auth from "./Auth";
import { getToDos, deleteSingleToDo } from "../actions/todo";

const auth = new Auth();
class ToDoContainer extends Component {
  componentWillMount() {
    const email = localStorage.getItem("Auth0->email");

    if (email) {
      this.props.getToDos(email);
    }
  }

  handleLogout() {
    auth.logout();
  }

  handleLogin() {
    auth.login();
  }

  handleDeleteToDo(id) {
    const email = localStorage.getItem("Auth0->email");
    this.props.deleteSingleToDo(id, email);
  }
  render() {
    const { isAuthenticated } = auth;
    if (isAuthenticated()) {
      return (
        <div>
          <Button
            variant="contained"
            color="default"
            onClick={this.handleLogout.bind(this)}
          >
            LOGOUT
          </Button>
          <AddToDo />
          <ToDos
            todo={this.props.todo.todos}
            onDelete={this.handleDeleteToDo.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Button color="primary" onClick={this.handleLogin.bind(this)}>
            LOGIN
          </Button>
        </div>
      );
    }
  }
}

ToDoContainer.propTypes = {
  getToDos: PropTypes.func.isRequired,
  deleteSingleToDo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getToDos, deleteSingleToDo }
)(ToDoContainer);
