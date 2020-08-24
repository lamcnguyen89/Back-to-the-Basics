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

// Source: https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
router.post("/api/newplace", (req, res) => {
    const title = req.body.title;
    const address = req.body.address;
    const lat = req.body.latitude;
    const lng = req.body.lng;
    const icon = "something goes here";
    const description = req.body.description;

    const newPlace = new places({
        title,
        address,
        lat,
        lng,
        icon,
        description
    });

    newPlace.save()
        .then(()=> res.json("New Event or Place added!"))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router