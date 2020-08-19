const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NationalParksSchema = new Schema({
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

module.exports = NationalParks = mongoose.model("nationalParks", NationalParksSchema);

