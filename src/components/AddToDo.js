import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDo } from '../actions/todo';

const styles = theme => ({            
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    }         
});

const spacing =  '24';

class AddToDo extends Component {

    constructor(){
		super();

		this.state = {
			title: "",
			todo_description: "",
			todo_date:""
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(e){        
		this.setState({[e.target.name]: e.target.value});
	}

    handleSubmit(e) {        
        const newToDo = {
            title: this.state.title,
            todo_description: this.state.todo_description,
            todo_date: this.state.todo_date
        };

        console.log("newToDo : ",newToDo);

        this.props.addToDo(newToDo);

        e.preventDefault();
    }
    render() {
        const { classes } = this.props;

        return (
            <div className="AddToDo">
                <h3>Add To-Do</h3>                
                <Grid container justify="center" spacing={Number(spacing)}>
                    <Grid item>                
                        <TextField                            
                            label="Title"
                            name="title"
                            className={classes.textField}
                            value={this.state.title}
                            onChange={this.onChange}
                            margin="normal"
                            variant="outlined"
                        />                    
                    </Grid>
                    <Grid item>         
                        <TextField                            
                            label="Description"
                            name="todo_description"
                            className={classes.textField}
                            value={this.state.todo_description}
                            onChange={this.onChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>                 
                    <Grid item>         
                        <TextField                            
                            label="Date"
                            name="todo_date"
                            type="datetime-local"                                
                            value={this.state.todo_date}
                            onChange={this.onChange}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />   
                    </Grid>                 
                </Grid>                                                                                    
                <br />                    
                <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>
                    ADD TODO                              
                </Button>                
            </div>
        );
    }
}

AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	todo: state.todo,
});

export default connect(mapStateToProps, { addToDo })(withStyles(styles)(AddToDo));