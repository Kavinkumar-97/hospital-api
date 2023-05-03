const express = require('express');
const app = express();
const PORT = 7878;

const db = require('./config/mongoose');
const passport = require('passport');
const passportJwt = require('./config/passport_jwt_strategy');

// Configure middleware to parse json request
app.use(express.json());

// Initialize passport
app.use(passportJwt.initialize());

// Configuring routes
app.use('/', require('./routes'));

// Listening to port
app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Server listening on http://localhost:${PORT}`);
});
