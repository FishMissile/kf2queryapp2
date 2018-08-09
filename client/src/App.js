import React from "react";
import { Component } from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import PlayerList from './components/PlayerList';
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
    render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">[Welcome to React]</h1>
          </header>
          <PlayerList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;


/* const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
) */
 