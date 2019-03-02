import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql'
});
class Login extends Component {

    constructor() {
        super();
    
        this.state = {        
          email: "",          
        };

        this.checkUser = this.checkUser.bind(this);    
    }

    handleLogin(e){
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);

        let email = this.refs.email.value;
        let password = this.refs.password.value;
    
        client.query({
          query: gql`
           query{
               user(
                 where:{
                 	_and: [
                 	  {email:{_eq: "${email}"}},
                     {password: {_eq: "${password}"}}
                   ]
               	}
               )
               {
                 id
                 email        
                 password         
               }
             }
          `,
        })
        .then(data => this.checkUser(data, email, password))
        .catch(error => console.error(error));

        e.preventDefault();
      }
    
      checkUser(data, email, password){
        console.log("USER DATA : ",data.data.user[0]);
        if(data.data.user[0].email === email && data.data.user[0].password === password){
          this.setState({
            email
          }, function(){
              this.props.setLogin(this.state.email);
          });
        }        
      }

      notRegistered(){
        this.setState({
          email: ""
        }, function(){
          this.props.notRegister();
        });
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
                Not registered? <button onClick={this.notRegistered.bind(this)}>Register</button> <br />
                <input type="submit" value="Login" />
            </form>                
    </div>
    )
  }
};

export default Login;