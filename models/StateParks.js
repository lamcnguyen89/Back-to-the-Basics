const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = StateParks = mongoose.model("stateParks", StateParksSchema);
