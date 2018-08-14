const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const Gamedig = require("gamedig");
const _ = require("lodash");

var serverinfo = [
  {
    mapname: "",
    id: 1,
    gamemode: "",
    servername: "",
    currentwave: "",
    maxwaves: "",
  }
];
var playerlist = [];
var state;

Gamedig.query({
  type: "killingfloor2",
  host: "159.65.207.13"
}).then(state => {
  for (let index = 0; index < state.players.length; index++) {
    playerlist.push(state.players[index]);
    playerlist[index].id = index;
  }

  serverinfo[0].mapname = state.map;
  serverinfo[0].gamemode = state.raw.game;
  serverinfo[0].servername = state.name;
  serverinfo[0].currentwave = state.raw.rules.CurrentWave;
  serverinfo[0].maxwaves = state.raw.rules.NumWaves;

  console.log(playerlist);
  console.log(serverinfo);
});

const Player = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    score: { type: GraphQLString },
    time: { type: GraphQLString }
  })
});

const Server = new GraphQLObjectType({
  name: "Server",
  fields: () => ({
    id: { type: GraphQLInt },
    mapname: { type: GraphQLString },
    gamemode: { type: GraphQLString },
    servername: { type: GraphQLString },
    currentwave: { type: GraphQLInt },
    maxwaves: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    server: {
      type: Server,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(serverinfo, { id: args.id });
        //call the data
      }
    },
    servers: {
      type: new GraphQLList(Server),
      resolve(parents, args) {
        return serverinfo;
      }
    },
    player: {
      type: Player,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(playerlist, { id: args.id });
        //call the data
      }
    },
    players: {
      type: new GraphQLList(Player),
      resolve(parents, args) {
        return playerlist;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
