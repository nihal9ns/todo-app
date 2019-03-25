import gql from 'graphql-tag';
const {client} = require('../config');
export function addToDoMutation(todo, email){
  client.mutate({
      mutation: gql`
      mutation insert_todo {
        insert_todo(
          objects: [
            {
              title: "${todo.title}",
              todo_description: "${todo.todo_description}",
              todo_date: "${todo.todo_date}",
              user_email: "${email}"
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
};

export function deleteToDoMutation(id, email){
    client.mutate({
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
        `,
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
};