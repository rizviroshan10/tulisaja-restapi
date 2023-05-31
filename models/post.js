const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  modified_date: {
    type: Date,
    default: null,
  }
  },{
  versionkey : false
})

module.exports = mongoose.model('Post', PostSchema,'post')