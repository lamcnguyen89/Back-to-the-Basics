const router = require("express").Router();
const weed = require("../models/Weed.js")

// Routes for dispensaries:

router.get("/api/weed", (req, res) => {
    weed.find({})
        .then(dbweed => {
            res.json(dbweed);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

module.exports = router