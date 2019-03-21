import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser, alreadyRegistered } from '../actions/todo';

class Register extends Component {

    componentWillReceiveProps(nextProps){

      if(nextProps.todo.isRegistered && !nextProps.todo.isLoggedIn){
        this.props.history.push('/login');
      }
    }

    handleRegister(e){        
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log("email : ",email);
        console.log("password : ",password);
    
        this.props.addUser(email, password);

        e.preventDefault();
      }
  
    handleAlreadyRegistered(){        
        console.log("in handleAlreadyRegistered");
        this.props.alreadyRegistered();
    }
  render() {
    return (
      <div className="RegisterForm">
        <h3>Register</h3> <hr />
            <form onSubmit={this.handleRegister.bind(this)}>
                <div>
                    <label>Email</label> <br />
                    <input type="text" ref="email" />
                </div>
                <br />
                <div>
                    <label>Password</label> <br />
                    <input type="password" ref="password" />
                </div>
                <br />                                              
                <input type="submit" value="Register" />
            </form>                
            Already registered? <button onClick={this.handleAlreadyRegistered.bind(this)}>Login</button> <br />
      </div>
    )
  }
}

Register.propTypes = {
  addUser: PropTypes.func.isRequired,	
  alreadyRegistered: PropTypes.func.isRequired,	
  todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { addUser, alreadyRegistered })(Register);