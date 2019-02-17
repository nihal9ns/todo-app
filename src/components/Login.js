import React, { Component } from 'react'
class Login extends Component {

    constructor() {
        super();
    
        this.state = {        
          email: ""
        };

        this.checkUser = this.checkUser.bind(this);
    
    }

    handleLogin(e){
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
    
        // client.query({
        //   query: gql`
        //   query{
        //     user{
        //       email
        //       password
        //     }
        //   }
        //   `,
        // })
        // .then(data => this.checkUser(data))
        // .catch(error => console.error(error));

        this.setState({
          email: this.refs.email.value,
        }, function(){
            this.props.setLogin();
        });
        e.preventDefault();
      }
    
      checkUser(data){
        let email = this.state.email;
        console.log("EMAIL : ",email);
        console.log("EMAIL REFS : ",this.refs.email.value);
        for(let i=0;i<data.data.user.length; i++){
          if(email === data.data.user[i].email){
            console.log("WORKS");
          }else{
            console.log("NO");
          }
        }
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
            </form>                
    </div>
    )
  }
};

export default Login;