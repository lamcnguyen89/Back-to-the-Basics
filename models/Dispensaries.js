const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of dispenseries located in Florida. How fitting are the outdoors and directly communing with the plant spirits?

const DispensarySchema = new Schema({
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

module.exports = Dispensaries = mongoose.model("dispensaries", DispensarySchema);
