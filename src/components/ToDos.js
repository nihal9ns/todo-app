import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDos extends Component {
  deleteToDo(id) {
    this.props.onDelete(id);
  }
  render() {
    let todoItems;
    if (this.props.todo) {
      todoItems = this.props.todo.map(todo => {
        return (
          <ToDoItem
            onDelete={this.deleteToDo.bind(this)}
            key={todo.id}
            todo={todo}
          />
        );
      });
    }

    return (
      <div className="ToDos">
        <h3>List of ToDo's</h3>
        {todoItems}
      </div>
    );
  }
}

export default ToDos;
