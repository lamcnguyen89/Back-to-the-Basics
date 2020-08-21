const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of beautiful state parks located in Florida.

const StateParksSchema = new Schema({
  title: {
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
  lng: {
    type: String,
    require: true
  },
  contentString: {
    type: String,
    require: false
  }
});

module.exports = StateParks = mongoose.model("stateparks", StateParksSchema);
