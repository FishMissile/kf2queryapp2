import React from "react";
import { Component } from "react";
import { graphql } from "react-apollo";
import { getPlayersQuery } from "./queries";

class PlayerList extends Component {
<<<<<<< HEAD
  displayPlayers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.players.map(player => {
        return (
          <div  class="divTableRow">
            <div key={player.id} class="divTableCell">
              {player.name}
=======
    displayPlayers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading players...</div> );
        } else {
            return data.players.map(player => {
                return(
                    <li key={player.id} >{player.name}</li>
                );
            })
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="book-list">
                    {this.displayPlayers()}
                </ul>
>>>>>>> f16e7b60f645040978094152bf46f27d6f1146e0
            </div>
          </div>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return <div class="divTableBody">{this.displayPlayers()}</div>;
  }
}

export default graphql(getPlayersQuery)(PlayerList);
