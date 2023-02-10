
// If the db connection string is in a .env file,
// we need to process it just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Flight = require('./models/flight');

/*--- Define Variables to Hold Documents ---*/
let flight, flights

/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!

Flight.find({}).then(console.log);

//console.log('Time to CRUD!');