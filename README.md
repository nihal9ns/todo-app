## ToDo App powered by Hasura GraphQL Engine

A simple ToDo App powered by Hasura GraphQL Engine at the backend and react at the frontend. Hasura provides instant realtime GraphQL on Postgres with fine grained access control.

## Deploy Hasura GraphQL Engine

[![Deploy HGE on heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

## Your first GraphQL Query using Hasura GraphQL Engine

https://docs.hasura.io/1.0/graphql/manual/getting-started/first-graphql-query.html

## Auth0 Integration

The app uses Auth0 for authentication, you can setup a Auth0 app by following the guide : https://auth0.com/docs/quickstart/spa/react

Note: This app uses the route http://localhost:3000/auth as the callback URl, you will have to specify the same when configuring an Auth0 app on the Auth0 dashboard. Also, make sure you add your client ID when setting the app up for yourself. (Dont't use my credentials :p)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
