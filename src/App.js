import './App.css';
import './components/Hello';
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Provider } from 'react-redux';
// import Test from './components/Test';
import store from './store';
// const R = require("rambda");

// SAGA
// import { logger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';

// import { takeEvery } from 'redux-saga/effects';

// const sagaMiddleware = createSagaMiddleware();

const client = new ApolloClient({
  uri: 'https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql'
});
class App extends Component {

  constructor() {
    super();

    // this.state = {
    //   todos: [],
    //   email: "",
    //   isLoggedIn: false,
    //   isRegistered: false
    // };

    // this.fetchTodo = this.fetchTodo.bind(this);
  }

  // fetchTodo(data){
  //   console.log("DATA : ",data.data.todo);
  //   this.setState({
  //     todos: data.data.todo
  //   });
  //   console.log("todos : ",this.state);
  // }

  // handleAddToDo(todo) {
  //   console.log('todo', todo);
      
  //   client.mutate({
  //     mutation: gql`
  //     mutation insert_todo {
  //       insert_todo(
  //         objects: [
  //           {
  //             title: "${todo.title}",
  //             todo_description: "${todo.todo_description}",
  //             todo_date: "${todo.todo_date}",
  //             user_email: "${this.state.email}"
  //           }
  //         ]
  //       ) {
  //         returning {
  //           id
  //           title
  //           todo_description
  //           todo_date
  //           created_at
  //           updated_at
  //           user_email
  //         }
  //       }
  //     }
  //     `,
  //   })
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));

  //   let todos = this.state.todos;
  //   todos.push(todo);
  //   this.setState({
  //     todos: todos
  //   });
  // }

  // handleDeleteToDo(id) {
  //   client.mutate({
  //     mutation: gql`
  //     mutation delete_todo {
  //       delete_todo(
  //         where: 
  //         {
  //           _and: [
  //               {id :{_eq: "${id}"}},
  //               {user_email: {_eq: "${this.state.email}"}}
  //           ]
  //         }
  //       ) {
  //         affected_rows 
  //       }
  //     }
  //     `,
  //   })
  //   .then(data => this.deleteTodo(id))
  //   .catch(error => console.error(error));
  // }

  // deleteTodo(id){
  //   console.log("ID : ",id);
  //   let todos = this.state.todos;
  //   let index = todos.findIndex(x => x.id === id);
  //   todos.splice(index, 1);
  //   this.setState({
  //     todos: todos
  //   });
  // }
//   handleLogin(email){
//     console.log("EMAIL : ",email);
//     if(email){
//       this.setState({
//         email,
//         isLoggedIn: true,
//       }, function(){
//         client.query({
//           query: gql`
//            query {
//                todo(
//                  where:
//                    {
//                      user_email:{_eq:"${this.state.email}"}
//                    }
//                  order_by: 
//                  {
//                    todo_date: desc
//                  }
//                ) 
//                {
//                  id
//                  title
//                  todo_description
//                  todo_date
//                  created_at
//                  updated_at
//                  user_email
//                }
//              }        
//           `,
//         })
//         .then(data => this.fetchTodo(data))
//         .catch(error => console.error(error));
//     });
//   }
// }

//   handleLogout(){
//     this.setState({
//       email: "",
//       isLoggedIn: false
//     });
//   }

//   handleRegister(){
//     this.setState({
//       isRegistered: true
//     });
//   }

//   handleNotRegistered(){
//     this.setState({
//       isRegistered: false
//     });
//   }
  render() {

    const { isLoggedIn, isRegistered } = this.props;

    if(this.state.isLoggedIn){
      return (
      <Provider store={store}>
        <div className="">
          <h1>ToDo App</h1> <hr />
          {/* <AddToDo addToDo={this.handleAddToDo.bind(this)} /> */}
          <AddToDo />
          <ToDos todos={this.state.todos} onDelete={this.handleDeleteToDo.bind(this)} /> <hr />           
          <button onClick={this.handleLogout.bind(this)}>Logout</button>     
        </div>  
      </Provider>  
      )    
    }else if(this.state.isRegistered){
      return (
      <Provider store={store}>
        <div className="">
          <Login setLogin={this.handleLogin.bind(this)} notRegister={this.handleNotRegistered.bind(this)} />
        </div>
      </Provider>
      )
    }else{
      return (
        <Provider store={store}>
          <div className="">
            <Register setRegister={this.handleRegister.bind(this)} /> <br />            
            <AddToDo />
          </div>
        </Provider>
      )
    }
  }
}

export default App;