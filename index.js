var express = require('express');
var app = express();
//for testing purpose
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

//facebook webhook testing
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'pgboot_2016') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});


app.listen(process.env.PORT || 3000)
