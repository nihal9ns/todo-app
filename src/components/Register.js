import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addUser, alreadyRegistered } from '../actions/todo';

const styles = theme => ({            
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }         
});

const spacing =  '24';

class Register extends Component {

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

      if(nextProps.todo.isRegistered && !nextProps.todo.isLoggedIn){
        this.props.history.push('/login');
      }
    }

    handleRegister(){        
        const email = this.state.email;
        const password = this.state.password;
        console.log("email : ",email);
        console.log("password : ",password);
    
        this.props.addUser(email, password);        
      }
  
    handleAlreadyRegistered(){        
        console.log("in handleAlreadyRegistered");
        this.props.alreadyRegistered();
    }
  render() {
    const { classes } = this.props;
    return (
      <div className="RegisterForm">
        <h3>Register</h3> <hr />            
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
            
              <Button variant="contained" color="primary" onClick={this.handleRegister.bind(this)}>
                  REGISTER                              
              </Button>  
              <br /> <br />                          
            Already registered? <Button variant="contained" color="default" onClick={this.handleAlreadyRegistered.bind(this)}>LOGIN</Button>            
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

export default connect(mapStateToProps, { addUser, alreadyRegistered })(withStyles(styles)(Register));