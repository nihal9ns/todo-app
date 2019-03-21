import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser, notRegistered } from '../actions/todo';
class Login extends Component {

    componentWillReceiveProps(nextProps){

      if(!(nextProps.todo.isRegistered && nextProps.todo.isLoggedIn)){
        this.props.history.push('/register');
      }
    }


    handleLogin(e){
        const email = this.refs.email.value;
        const password = this.refs.password.value;      

        console.log("email : ",email);
        console.log("password : ",password);
        
        this.props.fetchUser(email, password);

        e.preventDefault();
      }
    
      handleNotRegistered(){
        this.props.notRegistered();
      }
  render() {
    return (
        <div className="LoginForm">
            <h3>Login</h3> <hr />
            <form onSubmit={this.handleLogin.bind(this)}>
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
                <input type="submit" value="Login" />
                <br />                
            </form>   
            Not registered? <button onClick={this.handleNotRegistered.bind(this)}>Register</button>             
    </div>
    )
  }
};

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,	
  notRegistered: PropTypes.func.isRequired,	
  todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { fetchUser, notRegistered })(Login);