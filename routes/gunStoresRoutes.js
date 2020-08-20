const router = require("express").Router();
const gunStores = require("../models/GunStores.js");

// Routes for Gun Stores:

router.get("/gunstores", (req, res) => {
    gunStores.find({})
        .then(dbgunStores => {
            res.json(dbgunStores);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});


module.exports = router