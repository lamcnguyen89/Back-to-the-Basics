const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of random cool shit located in Florida.

const RandomSchema = new Schema({
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
  lng: {
    type: String,
    require: true
  }
});

module.exports = Random = mongoose.model("random", RandomSchema);