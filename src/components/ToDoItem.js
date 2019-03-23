import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
      color: theme.palette.text.primary,
      ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,            
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
    },
});

const spacing = "24";
class ToDoItem extends Component {

    deleteToDo(title) {
        this.props.onDelete(title);
    }
    render() {                
        const { classes } = this.props;

        return (
            <div>            
                <Grid container justify="center" spacing={Number(spacing)}>
                    <Grid item>                
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                Title : {this.props.todo.title}
                            </Typography>
                            <Typography component="p">
                                Description : {this.props.todo.todo_description}
                            </Typography>
                            <Typography component="p">
                                Date : {this.props.todo.todo_date}
                            </Typography>
                            <DeleteIcon className={classes.icon} onClick={this.deleteToDo.bind(this, this.props.todo.title)}/>
                        </Paper>             
                    </Grid>
                </Grid> 
            </div>
        );
    }
}

ToDoItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoItem);