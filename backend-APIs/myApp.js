var express = require('express');
var app = express();

// Cuando alguien accede a /, se envía el objeto respuesta "Hello Express"
/* app.get(
    '/',
    function(req,res){
        res.send("Hello Express");
    }
); */

// Enviar archivo cuando alguien accede a /
let absolutePath = __dirname + '/views/index.html';

app.get(
    '/',
    (req,res) => {
        res.sendFile(absolutePath);
    }
);

// Static assets. Middleware
app.use("/public", express.static(__dirname + "/public"));



































 module.exports = app;
