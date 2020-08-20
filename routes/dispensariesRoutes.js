const router = require("express").Router();
const dispensaries = require("../models/Dispensaries.js")

// Routes for dispensaries:

router.get("/api/dispensaries", (req, res) => {
    dispensaries.find({})
        .then(dbweed => {
            res.json(dbweed);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

module.exports = router