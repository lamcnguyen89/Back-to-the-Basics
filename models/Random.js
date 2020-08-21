const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of random cool shit located in Florida.

const RandomSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: false
  },
  lat: {
    type: Number,
    require: true
  },
  lng: {
    type: Number,
    require: true
  },
 
  icon: {
    type: String,
    require: true
  },
  contentString: {
    type: String,
    require: false
  }
});

module.exports = Random = mongoose.model("random", RandomSchema);