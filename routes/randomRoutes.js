const router = require("express").Router();
const random = require("../models/Random.js");

// Routes for Random Florida things:

// GET ( "/api/random" ) - Get all random
router.get("/random", (req, res) => {
    random.find({})
        .then(dbrandom => {
            res.json(dbrandom);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

// POST ( "/api/random" ) - Create a new random event
router.post("/random", ({body}, res) => {
    random.create(body)
        .then(dbrandom => {
            res.json(dbrandom);
        })
        .catch(err => {
            res.status(400).json(err);
        });
 })

 // PUT ( "/api/random/:id" ) - Update a random event
router.put("/random/:id", ({body,params},res) =>{
    random.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbrandom => {
        res.json(dbrandom);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// Delete ( "/api/deleterandom/:id" ) - Delete a random event
router.delete("/deleterandom/:id", ({body}, res) => {
    random.findByIdAndDelete(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbrandom => {
        res.json(dbrandom);
    })
        .catch(err => {
            res.status(400).json(err);
        });
 })


module.exports = router