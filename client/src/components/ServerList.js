import React from 'react';
import {Component } from 'react';
import {graphql} from 'react-apollo';
import {getServersQuery} from './queries';

class ServerList extends Component {
    displayServers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading server info...</div> );
        } else {
                return(
                    <div>
                    <li>{data.server.servername}</li>
                    <li>{data.server.mapname}</li>
                    <li>{data.server.gamemode}</li>
                    </div>
                );
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="server-list">
                    {this.displayServers()}
                </ul>
            </div>
        );
    }
}

export default graphql(getServersQuery)(ServerList);