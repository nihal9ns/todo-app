import React, { Component } from 'react';
import Auth from './Auth';

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
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading..." />
      </div>
    )
  }
}

export default AuthCallback;
