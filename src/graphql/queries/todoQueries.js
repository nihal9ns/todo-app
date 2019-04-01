import gql from "graphql-tag";

const { client } = require("../config");

export async function fetchToDos(email) {
  const { data } = await client
    .query({
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
             }
           }        
        `
    })
    .then(data => data)
    .catch(error => error);

  return data.todo;
}
