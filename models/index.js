const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  (error) => {
    if (error) console.log('Error connecting to database server');
    console.log(`Mongodb server running on ${DATABASE_URL}`);
  })

module.exports = mongoose;