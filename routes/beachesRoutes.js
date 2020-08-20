const router = require("express").Router();
const path = require("path");
const beaches = require("../models/Beaches.js");

// Routes for beaches:

router.get("/api/beaches", (req, res) => {
    console.log("testing route get ");
    beaches.find({})
        .then(dbbeaches => {
            res.json(dbbeaches);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});



module.exports = router