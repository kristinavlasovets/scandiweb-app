import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
