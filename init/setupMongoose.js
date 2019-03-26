// Dependencies
const mongoose = require('mongoose')

/**
 * Setting up mongoose
 */
function setupMongoose() {
  // Setup bluebird as a promise engine
  mongoose.Promise = global.Promise
  // Connect to the db
  mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true,
    // DB gets huge, so setting up custom timeouts
    socketTimeoutMS: 10000,
    connectTimeoutMS: 50000,
  })
  // Reconnect on disconnect
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(process.env.MONGODB_URI, {
      useMongoClient: true,
      // DB gets huge, so setting up custom timeouts
      socketTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    })
  })
}

// Exports
module.exports = setupMongoose
