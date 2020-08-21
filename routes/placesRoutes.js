const router = require("express").Router();
const path = require("path");
const places = require("../models/Places");

// Routes for beaches:

router.get("/api/places", (req, res) => {
    places.find({})
        .then(dbplaces => {
            res.json(dbplaces);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});



module.exports = router