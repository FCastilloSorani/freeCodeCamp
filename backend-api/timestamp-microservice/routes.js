module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

  function isValidUnix(input) {
    return /\d{5,}/.test(input) ? true : false;
  }

  function isValidDate(input) {
    let regex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(input) ? true : false;
  }

  app.get("/api/:date", (req, res) => {
    let date = req.params.date;
    let offset = new Date(date).getTimezoneOffset() * 60 * 1000;

    if (isValidUnix(date)) {
      res.send({
        unix: Number(date),
        utc: new Date(Number(date)).toUTCString()
      });
    }

    if(isValidDate(date)){
      res.send({
        unix: Number(Date.parse(date)) ,
        utc: new Date(date).toUTCString()
      });
    } 
    if(!isValidDate(date) && !isValidUnix(date)) {
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