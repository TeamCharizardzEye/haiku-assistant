const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_URI =
  "mongodb+srv://Coder_BB:gBzt$!u!yZC275w@cluster0.6hct0.mongodb.net/Haiku_Assistant?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const haikuSchema = new Schema({
  title: { type: String, required: true },
  textLine1: { type: Array, required: true },
  textLine2: { type: Array, required: true },
  textLine3: { type: Array, required: true },
  associatedUserID: String,
  public: Boolean,
  rating: String,
  gifs: Array,
});

module.exports = mongoose.model("Haiku", haikuSchema);
