import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql'
});
class Register extends Component {

    constructor() {
        super();
    
        this.state = {        
          email: "", 
        };

        this.registerUser = this.registerUser.bind(this);    
    }

    handleRegister(e){
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);

        let email = this.refs.email.value;
        let password = this.refs.password.value;
    
        client.mutate({
          mutation: gql`
           mutation insert_user {
               insert_user(
                 objects: [
                   {
                     email: "${email}",
                     password: "${password}"
                   }
                 ]
               ) {
                 returning {
                   id
                   email                   
                 }
               }
             }
            
          `,
        })
        .then(data => this.registerUser(data, email))
        .catch(error => console.error(error));

        e.preventDefault();
      }
    
      registerUser(data, email){
        console.log("REGISTER DATA : ",data);
        console.log("USER DATA : ",data.data.insert_user.returning[0]);
        if(data.data.insert_user.returning[0].email){
          this.setState({
            email
          }, function(){
              this.props.setRegister();
          });
        }        
      }

      alreadyRegistered(){
        this.setState({email: ""}, function(){this.props.setRegister();})
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
                Already registered? <button onClick={this.alreadyRegistered.bind(this)}>Login</button> <br />
                <input type="submit" value="Register" />
            </form>                
      </div>
    )
  }
}

export default Register;