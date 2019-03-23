import gql from 'graphql-tag';
const {client} = require('../config');
export async function fetchToDos(email){
    const { data } = await client.query({
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
      .then(function(data){
        console.log("fetch todos query : ",data);
        // const todo = data.todo;
        // console.log("todo : ",todo);
        return data;
      })        
      .catch(error => console.error(error));

      console.log("data inside query : ",data);

      return data.todo;
};