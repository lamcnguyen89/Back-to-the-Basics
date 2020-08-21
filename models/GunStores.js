const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This code creates a collection of awesome gun stores to stock up on weapons and ammunition for hunting, offensive actions and recreation in Florida.

const GunStoresSchema = new Schema({
  city: {
    type: String,
    require: true
  },
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
    require: true
  },
  lat: {
    type: String,
    require: true
  },
  lng: {
    type: String,
    require: true
  },
  contentString: {
    type: String,
    require: false
  }
});

module.exports = GunStores = mongoose.model("gunstores", GunStoresSchema);