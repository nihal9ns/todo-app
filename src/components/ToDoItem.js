import React, { Component } from 'react';

class ToDoItem extends Component {

    deleteToDo(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="ToDoItem">
                {this.props.todo.title} : {this.props.todo.todo_description} : {this.props.todo.todo_date}  <button onClick={this.deleteToDo.bind(this, this.props.todo.id)}>X</button>
            </li>
        );
    }
}

export default ToDoItem;
