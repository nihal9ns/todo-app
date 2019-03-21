import React, { Component } from 'react'
import AddToDo from './AddToDo';
import ToDos from './ToDos';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToDos } from '../actions/todo';
class ToDoContainer extends Component {

    componentDidMount(){
        this.props.getToDos("abc");
        console.log("props : ",this.props);
    }
  render() {
    return (
      <div>
        <AddToDo />
        <ToDos todo={this.props.todo.todos}/>
      </div>
    )
  }
}

ToDoContainer.propTypes = {
	getToDos: PropTypes.func.isRequired,
};

// export default ToDos;

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { getToDos })(ToDoContainer);