import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

import 'bootstrap/dist/css/bootstrap.css';
import App from './pages';
import * as serviceWorker from './serviceWorker';

window.API_MEDIA_URL = "https://localhost:8000/media/"
//window.API_MEDIA_URL = "https://th.loc:8000/media/"

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "https://localhost:8000/graphql/",
    //uri: "https://th.loc:8000/graphql/",
});
const client = new ApolloClient({
    cache,
    link,
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
