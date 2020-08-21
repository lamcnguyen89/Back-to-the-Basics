const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome National Parks that can take a lifetime to explore in Florida.

const NationalParksSchema = new Schema({
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
  },
  category: {
    type: String,
    require: false
  }
});

module.exports = NationalParks = mongoose.model("nationalparks", NationalParksSchema);

