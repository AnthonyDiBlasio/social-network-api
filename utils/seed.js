const connection = require('../config/connection');
const { User , Thought} = require('../models');

const {
 
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  
});