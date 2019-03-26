import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql"
});
