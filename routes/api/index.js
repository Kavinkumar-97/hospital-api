const express = require('express');
const passportJwt = require('../../config/passport_jwt_strategy');
const router = express.Router();

router.use('/doctors', require('./doctors'));
router.use(
  '/patients',
  passportJwt.authenticate('jwt', {
    session: false,
  }),
  require('./patients')
);
router.use(
  '/reports',
  passportJwt.authenticate('jwt', {
    session: false,
  }),
  require('./reports')
);

module.exports = router;
