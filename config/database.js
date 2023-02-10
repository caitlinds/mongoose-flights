//require mg library
const mongoose = require('mongoose');

//process.env makes all db properties available
mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});