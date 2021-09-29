const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add in password encryption

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  haikuID: Array,
});

module.exports = mongoose.model('User', userSchema);
