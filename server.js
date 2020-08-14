const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
const mysql = require("mysql2");
require("dotenv").config();
const config = require("./config");
const routes = require("./routes");
const db = require("./models");
const app = express();

// middleware to parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3006;

// connect to DB 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`app listening on: http://localhost:${PORT}`);
    });
  });

// mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
//     .then(() => console.log(`Mongo DB Succesfully Connected`))
//     .catch(err => console.log(err));

// use routes
app.use(routes);



// start server
// app.listen(PORT, () => {
//     console.log(`App listening on port: ${PORT}`);
// })