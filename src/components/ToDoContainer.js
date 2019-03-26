import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";
import Auth from "./Auth";
import { getToDos, deleteSingleToDo, addUser } from "../actions/todo";

const auth = new Auth();
class ToDoContainer extends Component {
  componentWillMount() {
    const email = localStorage.getItem("Auth0->email");

    if (email) {
      console.log("email from todo container : ", email);
      this.props.getToDos(email);
    }
  }

  handleLogout() {
    console.log("logout");
    auth.logout();
  }

  handleLogin() {
    console.log("login");
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
          <button onClick={this.handleLogout.bind(this)}>Logout</button>
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
          <button onClick={this.handleLogin.bind(this)}>Login</button>
        </div>
      );
    }
  }
}

ToDoContainer.propTypes = {
  getToDos: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteSingleToDo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getToDos, deleteSingleToDo, addUser }
)(ToDoContainer);
