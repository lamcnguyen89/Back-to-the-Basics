require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config");
const userLogin = require("./routes/index");
const placesRoutes = require("./routes/placesRoutes.js")
const app = express();


// middleware to parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
    // app.use(express.static("client/build"));
};

// connect to Mongo DB 
mongoose.connect(config.MONGO_URI || "mongodb://lamnguyen:nguyen05041989@ds151997.mlab.com:51997/heroku_fqgbgzs2", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
    .then(() => console.log(`Successfully loaded MongoDB`))
    .catch(err => console.log(err));

// Connect to Routes for User Login and then Map Markers.
app.use(userLogin);
app.use(placesRoutes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// start server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})