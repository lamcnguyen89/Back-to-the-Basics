const router = require("express").Router();
const nationalParks = require("../models/NationalParks.js");

// Routes for National Parks:

router.get("/api/nationalParks", (req, res) => {
    nationalParks.find({})
        .then(dbnationalParks => {
            res.json(dbnationalParks);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

module.exports = router