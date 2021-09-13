var express = require("express");
var app = express();

// Middlewares
// Static assets
app.use("/public", express.static(__dirname + "/public"));

//Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Routes
// Enviar archivo cuando alguien accede a /
let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// Uso de .env en petición GET
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

// Chained middleware en GET
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// Parameter input
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

module.exports = app;
