import React, { Component } from 'react'
import AddToDo from './AddToDo';
import ToDos from './ToDos';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToDos, deleteSingleToDo } from '../actions/todo';
class ToDoContainer extends Component {

    componentDidMount(){
        this.props.getToDos("abc");        
    }

    handleDeleteToDo(title){
      this.props.deleteSingleToDo(title);
    }
  render() {
    return (
      <div>
        <AddToDo />
        <ToDos todo={this.props.todo.todos} onDelete={this.handleDeleteToDo.bind(this)} />
      </div>
    )
  }
}

ToDoContainer.propTypes = {
  getToDos: PropTypes.func.isRequired,
  deleteSingleToDo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { getToDos, deleteSingleToDo })(ToDoContainer);