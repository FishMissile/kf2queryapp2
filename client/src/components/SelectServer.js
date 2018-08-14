import React from "react";
import { Component } from "react";
import { graphql } from "react-apollo";
import { getPlayersQuery } from "./queries";

class SelectServer extends Component {
  displaySelection() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Players...</div>;
    } else {
      return data.players.map(player => {
        return (
          <div key={player.id} className="divTableRow">
            <div value="player connecting" key={player.id} className="divTableCell">{player.name}</div>
            <div key={player.id} class="divTableCell">{player.score}</div>
            <div key={player.id} class="divTableCell">{Math.floor(player.time)}</div>
          </div>
        );
      });
    }
  } 
  render() {
    console.log(this.props);
    return <div className="divTableBody">{this.displaySelection()}</div>;
  }
}

export default graphql(getPlayersQuery)(SelectServer);
