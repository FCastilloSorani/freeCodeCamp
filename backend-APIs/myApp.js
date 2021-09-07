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

app.get(
  '/json',
  (req,res) => {
      if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "Hello json"});
      } else {
        res.json({"message": "HELLO JSON"});
      }
  }  
);




































 module.exports = app;
