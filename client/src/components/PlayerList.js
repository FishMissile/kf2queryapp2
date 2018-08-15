import React from "react";
import { Component } from "react";
import { graphql } from "react-apollo";
import { getPlayersQuery } from "./queries";

class PlayerList extends Component {


  constructor(props){
    super(props);
    var data = this.props.data;
    this.state = {
          data: data
    }
  }
  displayPlayers() {
  
      refetchQueries: [{query: getPlayersQuery}]
 
    var data = this.props.data;
    console.log("props: " + this.props.data)
    var id1 = (data.players)
/*     var id2 = (data.players.id +2 * 3)
    var id3 = (data.players.id +3 * 4)
    var id4 = (data.players.id +4 * 5) */
    if (data.loading) {
      return <div>Loading Players...</div>;
    } else {
      return data.players.map((player,index) => {
        return (
          <div key={index +3 *3} className="divTableRow">
            <div key={index} className="divTableCell">{player.name}</div>
            
            <div key={index +1 *2} className="divTableCell">{player.score}</div>
            
            <div key={index +2 *2} className="divTableCell">{Math.floor(player.time)}</div>
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
