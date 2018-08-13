import React from 'react';
import {Component } from 'react';
import {graphql} from 'react-apollo';
import {getServerInfoQuery} from './queries';

class ServerInfo extends Component {
    displayServerInfo(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading server information...</div> );
        } else {
            return data.serverinfo.map(server => {
                return(
                    <li key={server.id} >{server.name}</li>
                );
            })
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="book-list">
                    {this.displayServerInfo()}
                </ul>
            </div>
        );
    }
}

export default graphql(getServerInfoQuery)(ServerInfo);