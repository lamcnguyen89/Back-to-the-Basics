const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of dispenseries located in Florida. How fitting are the outdoors and directly communing with the plant spirits?

const WeedSchema = new Schema({
  city: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
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

module.exports = Weed = mongoose.model("weed", WeedSchema);
