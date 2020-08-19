const router = require("express").Router();
const outdoorStores = require("../models/OutdoorStores.js");

// Routes for Outdoor Stores:

router.get("/api/outdoorStores", (req, res) => {
    outdoorStores.find({})
        .then(dboutdoorStores => {
            res.json(dboutdoorStores);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

module.exports = router