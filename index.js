const express = require('express');
const app = express();
const PORT = 7878;

const db = require('./config/mongoose');
const passport = require('passport');
const passportJwt = require('./config/passport_jwt_strategy');

// Configure middle to parse json
app.use(express.json());

app.use(passportJwt.initialize());

app.use('/', require('./routes'));

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Server listening on port ${PORT}`);
});
