const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome National Parks that can take a lifetime to explore in Florida.

const NationalParksSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  contentString: {
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

module.exports = NationalParks = mongoose.model("nationalparks", NationalParksSchema);

