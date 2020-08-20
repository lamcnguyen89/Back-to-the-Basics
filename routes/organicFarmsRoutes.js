const router = require("express").Router();
const organicFarms = require("../models/OrganicFarms.js");

// Routes for Organic Farms:

router.get("/organicfarms", (req, res) => {
    organicFarms.find({})
        .then(dborganicFarms => {
            res.json(dborganicFarms);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

module.exports = router