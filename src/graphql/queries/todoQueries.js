import gql from 'graphql-tag';
const {client} = require('../config');
export function fetchToDos(email="abc"){
    client.query({
        query: gql`
         query {
             todo(
               where:
                 {
                   user_email:{_eq:"${email}"}
                 }
               order_by: 
               {
                 todo_date: desc
               }
             ) 
             {
               id
               title
               todo_description
               todo_date
               created_at
               updated_at
               user_email
             }
           }        
        `,
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
};