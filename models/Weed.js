const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of dispenseries located in Florida. How fitting are the outdoors and directly communing with the plant spirits?

const WeedSchema = new Schema({
  City: {
    type: String,
    require: true
  },
  Address: {
    type: String,
    require: true
  },
  Phone: {
    type: String,
    require: true
  },
  Lat: {
    type: String,
    require: true
  },
  Long: {
    type: String,
    require: true
  }
});

module.exports = Weed = mongoose.model("weed", WeedSchema);
