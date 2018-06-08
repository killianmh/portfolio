// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Require all models:
var db = require("./models");

// Create an instance of the express app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//Morgan logger for request coloring:
app.use(logger("dev"));
//Use body-parser for parsing request bodies:
app.use(bodyParser.urlencoded({extended: true}));
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080; 
// process.env.PORT || 8080; 

// If deployed, use the deployed database. Otherwise use the local portfolioDB database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolioDB";
// process.env.MONGODB_URI || "mongodb://localhost/portfolioDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


//Routes

// app.get("/", function(req, res) {
//     res.render("index");
// });

app.get("/test", function(req, res) {
  db.Project.find({})
    .then(function(dbProject){
      res.json(dbProject);
    })
    .catch(function(err){
      res.json(err);
    });
});

//Learn more button routes:

app.get("/", function(req, res){
  db.Project.find({"name": "Verse"})
    .then(function(dbProject){
      console.log(dbProject);
      var hbsObject = {
        name: dbProject[0].name,
        description: dbProject[0].description,
        technologies: dbProject[0].technologies,
        imageURL: dbProject[0].imageURL
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
    .catch(function(err){
      res.json(err);
    })
})


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });