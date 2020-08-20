const router = require("express").Router();
const beaches = require("../models/Beaches.js");

// Routes for beaches:

router.get("/beaches", (req, res) => {
    beaches.find({})
        .then(dbbeaches => {
            res.json(dbbeaches);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});



module.exports = router