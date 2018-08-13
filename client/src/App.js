import React from "react";
import { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PlayerList from "./components/PlayerList";
import ServerList from "./components/ServerList";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">[KF2 Server Query]</h1>
          </header>
          <ServerList />
          <p align="center">
          <div class="divTable blueTable">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">Name</div>
              </div>
            </div>
          
              <PlayerList />

          </div>
           </p>
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
