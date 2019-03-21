import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AddToDo from "./AddToDo";
import ToDoContainer from "./ToDoContainer";
import Login from "./Login";
import Register from "./Register";

// import Test from './components/Test';
import store from '../store';

class AppContainer extends Component {
  render() {
    return (
       <Provider store={store}>
        <Router>
            <div>            
                <Route exact path="/" component={ToDoContainer} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />                
            </div>
      </Router>
      </Provider> 
    )
  }
}

export default AppContainer;