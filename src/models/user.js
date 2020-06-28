const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//UserSchema represents a user in the database
const UserSchema = new Schema({
  Name: {
    type: String,
    required: [true, 'The Name field is required']
  },
  Bio: {
    type: String,
    required: [true, 'The Bio field is required']
  }
})

//Create a model for the user
const User = mongoose.model('user', UserSchema);

module.exports = User;