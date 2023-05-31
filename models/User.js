const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required : true,
        max :45
    },
    password :{
        type: String,
        required:true,
        min:6,
        Max:255
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

module.exports = mongoose.model('User',userSchema,'user')

