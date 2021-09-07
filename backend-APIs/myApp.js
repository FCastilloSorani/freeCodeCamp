var express = require('express');
var app = express();

// Static assets. Middleware
app.use("/public", express.static(__dirname + "/public"));

// Routes
// Enviar archivo cuando alguien accede a /
let absolutePath = __dirname + '/views/index.html';

app.get(
    '/',
    (req,res) => {
        res.sendFile(absolutePath);
    }
);

let json = {
    "message": "Hello json"
};

app.get(
  '/json',
  (req,res) => {
      res.json(json);
  }  
);




































 module.exports = app;
