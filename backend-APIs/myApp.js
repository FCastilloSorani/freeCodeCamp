var express = require('express');
var app = express();

// Cuando alguien accede a /, se envía el objeto respuesta "Hello Express"
app.get(
    '/',
    function(req,res){
        res.send("Hello Express");
    }
);




































 module.exports = app;
