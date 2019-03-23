import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchUser, notRegistered } from '../actions/todo';

const styles = theme => ({            
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }         
});

const spacing =  '24';
class Login extends Component {

    constructor(){
      super();

      this.state = {
        email: "",
        password: ""
      };

      this.onChange = this.onChange.bind(this);
    }

    onChange(e){        
      this.setState({[e.target.name]: e.target.value});
    }

    componentWillReceiveProps(nextProps){

      if(!(nextProps.todo.isRegistered && nextProps.todo.isLoggedIn)){
        this.props.history.push('/register');
      }
    }


    handleLogin(){
        const email = this.state.email;
        const password = this.state.password;      

        console.log("email : ",email);
        console.log("password : ",password);
        
        this.props.fetchUser(email, password);        
      }
    
      handleNotRegistered(){
        this.props.notRegistered();
      }
  render() {
    const { classes } = this.props;
    return (
        <div className="LoginForm">
            <h3>Login</h3> <hr />            
            <Grid container justify="center" spacing={Number(spacing)}>
                <div>                    
                    <Grid item>         
                        <TextField                            
                            label="Email"
                            name="email"                            
                            value={this.state.email}
                            onChange={this.onChange}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"                            
                        />   
                    </Grid>                 
                </div>                
                <div>                    
                    <Grid item>         
                        <TextField                            
                            label="Password"
                            name="password"                            
                            value={this.state.password}
                            onChange={this.onChange}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"                            
                        />   
                    </Grid>                 
                </div>
              </Grid>
                <br />                                                  
                <Button variant="contained" color="primary" onClick={this.handleLogin.bind(this)}>
                    LOGIN                              
                </Button>                
                <br /> <br />                            
            Not registered? <Button variant="contained" color="default" onClick={this.handleNotRegistered.bind(this)}>REGISTER</Button>    
    </div>
    )
  }
};

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,	
  notRegistered: PropTypes.func.isRequired,	
  todo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { fetchUser, notRegistered })(withStyles(styles)(Login));