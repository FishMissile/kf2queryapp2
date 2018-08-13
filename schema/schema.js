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
<<<<<<< HEAD

var serverinfo = [
  {
    mapname: "",
    id: 1,
    gamemode: "",
    servername: "",
    currentwave: "",
    maxwaves: "",
=======
var serverinfo = [
  {
    id: 1,
    mapname: "",
    difficulty: ""
>>>>>>> f16e7b60f645040978094152bf46f27d6f1146e0
  }
];
var playerlist = [];
var state;
<<<<<<< HEAD

Gamedig.query({
  type: "killingfloor2",
  host: "176.57.163.24"
}).then(state => {
  for (let index = 0; index < state.players.length; index++) {
    playerlist.push(state.players[index]);
    playerlist[index].id = index;
=======
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
      console.log(index);
    }
    var info4 = Object.values(state.raw.rules);
    for (var j = 0; j < info4.length; j++) {
      console.log(info4[j]);
    }

    
    console.log("Difficulty: " + state.raw.rules.Difficulty);
    console.log("Map: " + state.raw.rules.MapName);
    serverinfo[0].mapname = state.raw.rules.MapName;
    if ((info4 = 0)) {
      console.log("Difficulty: Normal");
      document.write("Difficulty Normal");

      var Diff = "Normal";
      serverinfo[0].difficulty = Diff;
    } else if ((info4 = 1)) {
      console.log("Difficulty: Hard");
      var Diff = "Hard";
      serverinfo[0].difficulty = Diff;
    } else if ((info4 = 2)) {
      console.log("Difficulty: Suicidal");
      var Diff = "Suicidal";
      serverinfo[0].difficulty = Diff;
    } else if ((info = 3)) {
      console.log("Difficulty: Hell on Earth");
      var Diff = "Hell on Earth";
      serverinfo[0].difficulty = Diff
    }
    console.log(playerlist);
    console.log(serverinfo);
>>>>>>> f16e7b60f645040978094152bf46f27d6f1146e0
  }

  serverinfo[0].mapname = state.map;
  serverinfo[0].gamemode = state.raw.game;
  serverinfo[0].servername = state.name;
  serverinfo[0].currentwave = state.raw.rules.CurrentWave;
  serverinfo[0].maxwaves = state.raw.rules.NumWaves;

  console.log(playerlist);
  console.log(serverinfo);
});

const Server = new GraphQLObjectType({
  name: "Server",
  fields: () => ({
    id: { type: GraphQLInt },
    servername: { type: GraphQLString },
    ip: { type: GraphQLString },
    mapname: { type: GraphQLString },
    difficulty: { type: GraphQLString }
  })
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
<<<<<<< HEAD
        //call the data
      }
    },
    servers: {
      type: new GraphQLList(Server),
      resolve(parents, args) {
        return serverinfo;
=======
>>>>>>> f16e7b60f645040978094152bf46f27d6f1146e0
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
    },
    serverinfo: {
      type: new GraphQLList(Server),
      resolve(parents, args) {
        return serverinfo;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
