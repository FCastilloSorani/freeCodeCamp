module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

  function isNumber(input) {
    /* return isNaN(Number(input)) ? false : true; */
    return input == Number(input) ? true : false;
  }

  function isValidDate(input) {
    let regex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(input) ? true : false;
  }

  app.get("/api/:date", (req, res) => {
    let date = req.params.date;

    if (isNumber(date)) {
      res.send({
        unix: date,
        utc: new Date(Number(date)).toUTCString()
      });
    }

    if(!isNumber(date)) {
      res.send({
        unix: Date.parse(date),
        utc: new Date(date).toUTCString()
      });
    } else {
      res.send({
        message: 'Invalid date'
      });
    }
  });

  app.get("/api/", (req, res) => {
    let utc = new Date();
    res.send({
      unix: Date.now(),
      utc: utc.toUTCString(),
    });
  });
};
