const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of beautiful state parks located in Florida.

const StateParksSchema = new Schema({
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

module.exports = StateParks = mongoose.model("stateparks", StateParksSchema);
