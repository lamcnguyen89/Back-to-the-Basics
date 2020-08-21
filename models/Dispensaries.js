const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of dispenseries located in Florida. How fitting are the outdoors and directly communing with the plant spirits?

const DispensarySchema = new Schema({
  title: {
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
  Lng: {
    type: String,
    require: true
  },
  contentString: {
    type: String,
    require: false
  }
});

module.exports = Dispensaries = mongoose.model("dispensaries", DispensarySchema);
