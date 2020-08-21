const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome beach destinations in Florida.

const BeachesSchema = new Schema({
  title: {
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
  },
  long: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    require: true
  },
  contentString: {
    type: String,
    require: false
  }
});

module.exports = Beaches = mongoose.model("beaches", BeachesSchema);

