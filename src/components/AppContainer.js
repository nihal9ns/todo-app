import { BrowserRouter as Router,Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ToDoContainer from "./ToDoContainer";
import AuthCallback from "./AuthCallback";
import store from '../store';

class AppContainer extends Component {
  render() {
    return (
       <Provider store={store}>
        <Router>
            <div>                            
                <Route exact path="/" component={ToDoContainer} />
                <Route exact path="/auth" component={AuthCallback} />        
            </div>
      </Router>
      </Provider> 
    )
  }
}

export default AppContainer;