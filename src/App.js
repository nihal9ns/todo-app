import './App.css';
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
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
      email: ""
    };

    this.test = this.test.bind(this);
    this.checkUser = this.checkUser.bind(this);

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


  handleLogin(e){
    console.log(this.refs.email.value);
    console.log(this.refs.password.value);

    client.query({
      query: gql`
      query{
        user{
          email
          password
        }
      }
      `,
    })
    .then(data => this.checkUser(data))
    .catch(error => console.error(error));
    

    this.setState({
      email: this.refs.email.value,
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

  render() {
    return (
      <div className="">
        <h1>ToDo App</h1> <hr />
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


        <AddToDo addToDo={this.handleAddToDo.bind(this)} />
        <ToDos todos={this.state.todos} onDelete={this.handleDeleteToDo.bind(this)} /> <hr />
      </div>
    )
  }
}

export default App;


// const HelloWorld = ({name}) => (
//  <div>{`Hi ${name}`}</div>
// );

// export default HelloWorld;