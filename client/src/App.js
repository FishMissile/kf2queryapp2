import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";

const getPlayersQuery = gql`
  {
    players {
      name
    }
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
displayPlayers(){
  var data = this.props.data;
  if(data.loading){
    return(<option disabled>loading players</option>)
  } else{
    return data.players.map(player =>{
      return(
        <li>player.name</li>
      )
    })
  }
}
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ul id="player-list">
            {this.displayPlayers}
          </ul>
          <p className="App-intro" />
        </div>
      </ApolloProvider>
      
    );
  }
}

export default graphql(getPlayersQuery)(App);
