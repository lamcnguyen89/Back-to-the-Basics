const router = require("express").Router();
const events = require("../models/Events.js");

// Routes for Cool Florida Events:

// GET ( "/api/events" ) - Get all events
router.get("/api/events", (req, res) => {
    events.find({})
        .then(dbevents => {
            res.json(dbevents);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

// POST ( "/api/events" ) - Create a new events event
router.post("/api/events", ({body}, res) => {
    events.create(body)
        .then(dbevents => {
            res.json(dbevents);
        })
        .catch(err => {
            res.status(400).json(err);
        });
 })

 // PUT ( "/api/events/:id" ) - Update a events event
router.put("/api/events/:id", ({body,params},res) =>{
    events.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbevents => {
        res.json(dbevents);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// Delete ( "/api/deleteevents/:id" ) - Delete a events event
router.delete("/api/deleteevents/:id", ({body}, res) => {
    events.findByIdAndDelete(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbevents => {
        res.json(dbevents);
    })
        .catch(err => {
            res.status(400).json(err);
        });
 })

module.exports = router