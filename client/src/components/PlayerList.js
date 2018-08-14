import React from "react";
import { Component } from "react";
import { graphql } from "react-apollo";
import { getPlayersQuery } from "./queries";

class PlayerList extends Component {
  displayPlayers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.players.map(player => {
        return (
          <div key={player.id} className="divTableRow">
            <div key={player.id} className="divTableCell">
              {player.name}
            </div>
          </div>
        );
      });
    }
  } 
  render() {
    console.log(this.props);
    return <div className="divTableBody">{this.displayPlayers()}</div>;
  }
}

export default graphql(getPlayersQuery)(PlayerList);
