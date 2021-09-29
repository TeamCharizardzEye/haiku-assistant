const Haiku = require('../models/haikusModel');
const User = require('../models/userModel');

const haikuController = {};
const secret = 'supersecret';

haikuController.userLookup = async (req, res, next) => {
  // Returns the list of haikus a user has saved
  try {
    const doc = await User.findOne({ username: req.cookies.username }).exec();
    res.locals.haikus = doc.haikuID;
  } catch (err) {
    console.log(err);
    return next();
  }

  return next();
};

haikuController.haikuLookup = async (req, res, next) => {
  // Returns a specific haiku using username and password
  try {
    const doc = await Haiku.findOne({ title: req.body.title, associatedUserID: req.body.username }).exec();
    res.locals.haiku = doc;
  } catch (err) {
    console.log(err);
    return next();
  }

  return next();
};

haikuController.saveHaiku = async (req, res, next) => {
  // Saves the haiku to the database
  try {
    // Grab the user doc and check to see if the haiku with that title exists
    let doc = await User.findOne({ username: req.body.username }).exec();
    const checkHaiku = await Haiku.findOne({ title: req.body.title, associatedUserID: req.body.username }).exec();

    if (checkHaiku) {
      // If the Haiku to check exists, then update with changes
      const updateHaiku = await Haiku.findOneAndUpdate({
        title: req.body.title, associatedUserID: req.body.username
      }, {
        textLine1: req.body.textLine1,
        textLine2: req.body.textLine2,
        textLine3: req.body.textLine3,
        public: req.body.public,
        rating: req.body.rating,
        gifs: req.body.gifs,
      });
    } else {
      // If not, then create it
      const newHaiku = await Haiku.create({
        title: req.body.title,
        textLine1: req.body.textLine1,
        textLine2: req.body.textLine2,
        textLine3: req.body.textLine3,
        associatedUserID: req.body.username,
        public: req.body.public,
        rating: req.body.rating,
        gifs: req.body.gifs,
      });
      const updatedArr = doc.haikuID.slice();
      updatedArr.push(req.body.title);
      doc = await User.findOneAndUpdate({ username: req.body.username }, { haikuID: updatedArr }, { new: true });
    }

    // Send off the array of haikus for the user
    res.locals.haikus = doc.haikuID;
  } catch (err) {
    console.log(err);
    return next();
  }

  return next();
};

module.exports = haikuController;
