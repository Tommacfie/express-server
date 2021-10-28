const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');

mongoose.connect(DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (error) => {
    if (error) console.log('error');
    console.log(`Connected to MongoDb database`);
  })

module.exports = mongoose;