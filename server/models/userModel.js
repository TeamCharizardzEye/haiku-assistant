<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require("mongoose");
>>>>>>> dev
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const MONGO_URI =
  'mongodb+srv://Coder_BB:gBzt$!u!yZC275w@cluster0.6hct0.mongodb.net/Haiku_Assistant?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  haikuID: Array,
});

<<<<<<< HEAD
userSchema.pre(['save', 'get'], function (next) {
=======
userSchema.pre(['save', 'get'], function(next) {
>>>>>>> dev
  const user = this;
  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    // If there's an error, return it. Otherwise, generate a salt.
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      // If there's an error, return it. Otherwise, generate a hash and overwrite the plaintext password with it.
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema);
=======
module.exports = mongoose.model("User", userSchema);
>>>>>>> dev
