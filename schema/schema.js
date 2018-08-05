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

var playerlist = [];
var state;
Gamedig.query(
  {
    type: "killingfloor2",
    host: "177.54.146.18"
  },
  function(e, state) {
    if (e) console.log("Server is offline");
    else console.log("Query Success!");
    for (let index = 0; index < state.players.length; index++) {
      playerlist.push(state.players[index]);
      playerlist[index].id = index;
    }
    console.log(playerlist);
  }
);

const Player = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    score: { type: GraphQLString },
    time: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
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
