import React from "react";
import { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PlayerList from "./components/PlayerList";
import ServerList from "./components/ServerList";
import "./App.css";

const client = new ApolloClient({
  uri: "https://warm-tundra-43181.herokuapp.com/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">[KF2 Server Query]</h1>
          </header>
          <div align="center">
              <ServerList />
            
            <p></p>

            <div className="divTable blueTable">
              <div className="divTableHeading">
                <div className="divTableRow">
                  <div className="divTableHead">Name</div>
                  <div className="divTableHead">Dosh</div>
                  <div className="divTableHead">Time</div>
                </div>
              </div>

              <PlayerList />
            </div>
          </div>
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
