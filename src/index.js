import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

//https://github.com/PJMantoss/react_gql

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
