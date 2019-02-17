import './App.css';
import './components/Hello';
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import Login from "./components/Login";
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
// const R = require("rambda");

const client = new ApolloClient({
  uri: 'https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql'
});


class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      email: "",
      isLoggedIn: false
    };

    this.test = this.test.bind(this);
  }

  componentWillMount(){
    client.query({
      query: gql`
      query{
        todo{
          id
          title
          todo_description
          todo_date
        }
      }
      `,
    })
    .then(data => this.test(data))
    .catch(error => console.error(error));
  }

  test(data){
    console.log("DATA : ",data.data.todo);
    this.setState({
      todos: data.data.todo
    });
    console.log("todos : ",this.state);
  }

  handleAddToDo(todo) {
    console.log('todo', todo);
      
    client.mutate({
      mutation: gql`
      mutation insert_todo {
        insert_todo(
          objects: [
            {
              title: "${todo.title}",
              todo_description: "${todo.todo_description}",
              todo_date: "${todo.date}",
              user_email: "test"
            }
          ]
        ) {
          returning {
            id
            title
            todo_description
            todo_date
            created_at
            updated_at
            user_email
          }
        }
      }
      `,
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));



    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos
    });
  }

  handleDeleteToDo(id) {
    let todos = this.state.todos;

    client.mutate({
      mutation: gql`
      mutation delete_todo {
        delete_todo(
          where: 
          {
            _and: [
                {id :{_eq: "${id}"}},
                {user_email: {_eq: "test"}}
            ]
          }
        ) {
          affected_rows 
        }
      }
      `,
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));



    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }


  handleSetLogin(){
    this.setState({
      isLoggedIn: true
    });
  }

  render() {

    if(this.state.isLoggedIn){
      return (
      <div className="">
        <h1>ToDo App</h1> <hr />
        <AddToDo addToDo={this.handleAddToDo.bind(this)} />
        <ToDos todos={this.state.todos} onDelete={this.handleDeleteToDo.bind(this)} /> <hr />                
      </div>  
      )    
    }else{
      return (
      <div className="">
        <Login setLogin={this.handleSetLogin.bind(this)} />
      </div> )
    }
  }
}

export default App;