import './App.css';
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import React, { Component } from 'react';;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleAddToDo(id){

  }

  handleDeleteToDo(id){

  }

  render() {
    return (
      <div className="">
        <h1>ToDo App</h1> <hr/ >
        <AddToDo addToDo={this.handleAddToDo.bind(this)} />
        <ToDos todos={this.state.todos} onDelete={this.handleDeleteToDo.bind(this)} /> <hr />
      </div>
    )
  }
}

export default App;