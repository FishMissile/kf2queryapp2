const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const cors = require('cors');

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.js'));
  });
}
/* // API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: testinfo.info1 });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    
  });
} */

app.listen(port, () => console.log(`serverinfo:`));
