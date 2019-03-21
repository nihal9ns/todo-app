import gql from 'graphql-tag';
const {client} = require('../config');

export function insertUserMutation(email, password){
    client.mutate({
        mutation: gql`
         mutation insert_user {
             insert_user(
               objects: [
                 {
                   email: "${email}",
                   password: "${password}"
                 }
               ]
             ) {
               returning {
                 id
                 email                   
               }
             }
           }
          
        `,
      })
    .then(data => console.log("insert user mutation : ",data))
    .catch(error => console.error(error));
};

export function deleteUserMutation(email){
    client.mutate({
        mutation: gql`
         mutation delete_user {
               delete_user(
                 where: 
                 {
                   email: {_eq: "${email}"}
                 }
               ) {
               	affected_rows 
               }
             }
             
        `,
      })
    .then(data => console.log("delete user mutation : ",data))
    .catch(error => console.error(error));
}