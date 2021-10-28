const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const URL = process.env.DATABASE_URL;
console.log(URL);

mongoose.connect(URL, (error) => {
  if (error) console.log('Error connecting to database server');
  console.log(`Mongodb server running on ${URL}`);
})

module.exports = mongoose;