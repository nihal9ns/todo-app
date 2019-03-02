import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDo } from '../actions/todo';

class AddToDo extends Component {

    constructor() {
        super();

        this.state = {
            newToDo: {}
        }
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Value of title is required...');
        } else {
            this.setState({
                newToDo: {
                    // Add id
                    title: this.refs.title.value,
                    todo_description: this.refs.todo_description.value,
                    todo_date: this.refs.todo_date.value
                }
            },
                function () {
                    console.log(this.state);
                    // this.props.addToDo(this.state.newToDo);
                    this.props.addToDo(this.state.newToDo);
                });
        }

        e.preventDefault();
    }

    render() {
        return (
            <div className="AddToDo">
                <h3>Add To-Do</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label> <br />
                        <input type="text" ref="title" />
                    </div>
                    <br />
                    <div>
                        <label>To-Do</label> <br />
                        <input type="text" ref="todo_description" />
                    </div>
                    <br />
                    <div>
                        <label>To-Do Date</label> <br />
                        <input type="date" ref="todo_date" />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// export default AddToDo;
AddToDo.propTypes = {
	addToDo: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	todo: state.todo,	
});

export default connect(mapStateToProps, { addToDo })(AddToDo);