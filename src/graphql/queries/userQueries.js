import gql from 'graphql-tag';
const {client} = require('../config');
export function loginUser(email, password){
  client.query({
    query: gql`
     query{
         user(
           where:{
             _and: [
               {email:{_eq: "${email}"}},
               {password: {_eq: "${password}"}}
             ]
           }
         )
         {
           id
           email        
           password         
         }
       }
    `,
  })
  .then(data => console.log("login user query : ",data))
  .catch(error => console.error(error));
};