const mongoose = require('./index');

const Schema = mongoose.Schema;

const topicModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  }
});

const Topic = mongoose.model('Topic', topicModel);

module.exports = Topic;