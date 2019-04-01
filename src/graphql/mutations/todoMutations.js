import gql from "graphql-tag";

const { client } = require("../config");

export async function addToDoMutation(todo, email) {
  await client
    .mutate({
      mutation: gql`
      mutation insert_todo {
        insert_todo(
          objects: [
            {            
              id: "${todo.id}",
              title: "${todo.title}",
              todo_description: "${todo.todo_description}",
              todo_date: "${todo.todo_date}",
              user_email: "${email}",              
            }
          ]
        ) {
          returning {
            id
            title
            todo_description
            todo_date                                    
          }
        }
      }
      `
    })
    .then(data => data)
    .catch(error => error);
}

export async function deleteToDoMutation(id, email) {
  await client
    .mutate({
      mutation: gql`
        mutation delete_todo {
          delete_todo(
            where: 
            {
              _and: [
                  {id :{_eq: "${id}"}},
                  {user_email: {_eq: "${email}"}}
              ]
            }
          ) {
            affected_rows 
          }
        }
        `
    })
    .then(data => data)
    .catch(error => error);
}
