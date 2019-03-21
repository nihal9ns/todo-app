import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {

    deleteToDo(title) {        
        this.props.onDelete(title);
    }
    render() {
        let todoItems;
        // console.log('this.props.todo', this.props.todo);         
        if (this.props.todo) {
            todoItems = this.props.todo.map(todo => {
                return (
                    <ToDoItem onDelete={this.deleteToDo.bind(this)} key={todo.title} todo={todo} />
                )
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