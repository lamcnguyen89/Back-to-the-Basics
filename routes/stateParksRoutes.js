const router = require("express").Router();
const stateParks = require("../models/StateParks.js");

// Routes for state parks:

router.get("/api/stateParks", (req, res) => {
    stateParks.find({})
        .then(dbstateParks => {
            res.json(dbstateParks);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});



module.exports = router