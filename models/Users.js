var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true
      },
  address: {
    type: String,
    required:true
  },
  position:{
    type: String,
    required: true
  } ,
  salary:{
    type: Number,
    required: true
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);
