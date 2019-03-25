import React, { Component } from 'react';
import Auth from './Auth0';

const auth = new Auth();
class AuthCallback extends Component {
    
    componentWillMount(){      
        auth.handleAuth();
        const email = localStorage.getItem("Auth0->email");

        if(email){
          console.log("email from auth callback : ",email);                   
          this.props.addUser(email);
          window.location.href = "/";          
        }
    }
  render() {
    return (
      <div> 
               
      </div>
    )
  }
}

export default AuthCallback;
