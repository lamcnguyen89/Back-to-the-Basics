const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome events to be held in Florida.

const EventsSchema = new Schema({
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

module.exports = Events = mongoose.model("events", EventsSchema);