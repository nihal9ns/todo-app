import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  }
});
class ToDoItem extends Component {
  deleteToDo(id) {
    this.props.onDelete(id);
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center" spacing={24}>
          <Grid item>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3">
                Title : {this.props.todo.title}
              </Typography>
              <Typography component="p">
                Description : {this.props.todo.todo_description}
              </Typography>
              <Typography component="p">
                Date : <Moment format="LL">{this.props.todo.todo_date}</Moment>
              </Typography>
              <DeleteIcon
                className={classes.icon}
                onClick={this.deleteToDo.bind(this, this.props.todo.id)}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToDoItem);
