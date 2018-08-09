import React from 'react';
import {Component } from 'react';
import {graphql} from 'react-apollo';
import {getPlayersQuery} from './queries';

class PlayerList extends Component {
    displayPlayers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
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
            </div>
        );
    }
}

export default graphql(getPlayersQuery)(PlayerList);