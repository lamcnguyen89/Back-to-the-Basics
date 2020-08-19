const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome beach destinations in Florida.

const BeachesSchema = new Schema({
  siteName: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  lat: {
    type: String,
    require: true
  },
  long: {
    type: String,
    require: true
  }
});

module.exports = Beaches = mongoose.model("beaches", BeachesSchema);

