// Init
var express = require("express");
var app = express();
const PORT = 3000;

// Routes
require('./routes')(app);

// CORS
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

// Static files
app.use(express.static("public"));

// Listen for requests
var listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});