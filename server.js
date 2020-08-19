require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config");
const userLogin = require("./routes/index");
const beachesRoutes = require("./routes/beachesRoutes.js");
const nationalParksRoutes = require("./routes/nationalParksRoutes.js");
const stateParksRoutes = require("./routes/stateParksRoutes.js");
const weedRoutes = require("./routes/weedRoutes.js");
const gunStoresRoutes = require("./routes/gunStoresRoutes.js");
const organicFarmsRoutes = require("./routes/organicFarmsRoutes.js");
const randomRoutes = require("./routes/randomRoutes.js");
const outdoorStoresRoutes = require("./routes/outdoorStoresRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const app = express();


// middleware to parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};

// connect to Mongo DB 
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
    .then(() => console.log(`Love, Death, Darkness and Chaos`))
    .catch(err => console.log(err));

// Connect to Routes for User Login and then Map Markers.
app.use(userLogin);
app.use(beachesRoutes);
app.use(nationalParksRoutes);
app.use(stateParksRoutes);
app.use(weedRoutes);
app.use(gunStoresRoutes);
app.use(organicFarmsRoutes);
app.use(randomRoutes);
app.use(outdoorStoresRoutes);
app.use(eventsRoutes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// start server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})