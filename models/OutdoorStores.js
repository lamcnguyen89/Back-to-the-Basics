const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome outdoor supply stores located in Florida.

const OutdoorStoresSchema = new Schema({
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

module.exports = OutdoorStores = mongoose.model("outdoorstores", OutdoorStoresSchema);