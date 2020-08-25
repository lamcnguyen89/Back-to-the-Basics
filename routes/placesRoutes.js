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
    const phone = req.body.phone;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const icon = req.body.icon;
    const contentString = req.body.contentString;
    const category = req.body.category;

    const newPlace = new places({
        title,
        address,
        phone,
        lat,
        lng,
        icon,
        contentString,
        category
    });
    console.log(newPlace);
    newPlace.save()
        .then(()=> res.json("New Event or Place added!"))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router