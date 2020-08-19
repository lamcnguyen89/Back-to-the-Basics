const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome National Parks that can take a lifetime to explore in Florida.

const OrganicFarmsSchema = new Schema({
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

module.exports = OrganicFarms = mongoose.model("organicfarms", OrganicFarmsSchema);