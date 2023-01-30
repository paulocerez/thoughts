// destructures the Mongo Client object from the default value returned to it, allows to connect
const { MongoClient } = require("mongodb");

// initialization
let dbConnection;

module.exports = {
  // establishing the connection, passing a callback function that will be run after the connection being established
  connectToDb: (cb) => {
    // connection string to the db locally
    MongoClient.connect("mongodb://localhost:27017/thoughts")
      // if connection is complete -> client object represents db connection
      .then((client) => {
        // interface of interaction to the connected db
        dbConnection = client.db();
        return cb();
      })
      // catch errors when trying to connect
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  // return db connection (value) after connection
  getDb: () => dbConnection,
};
