import React from "react";
import { Component } from "react";
import { graphql } from "react-apollo";
import { getServersQuery } from "./queries";

class ServerList extends Component {
  displayServers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading server info...</div>;
    } else {
      return (
        <div className="server divTable serverInfo">
          <div className="server divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Server Info</div>
            </div>
          </div>
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">{data.server.servername}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">
                Current Map: {data.server.mapname}
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">
                Game Mode: {data.server.gamemode}
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">
                Current Wave: {data.server.currentwave}
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">
                Maximum waves:
                {data.server.maxwaves}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="server divTable blueTable">{this.displayServers()}</div>
    );
  }
}

export default graphql(getServersQuery)(ServerList);
