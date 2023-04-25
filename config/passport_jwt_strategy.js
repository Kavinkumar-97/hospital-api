const passport = require('passport');
const Doctor = require('../models/doctor');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractStrategy = require('passport-jwt').ExtractJwt;

let options = {};
options.jwtFromRequest = ExtractStrategy.fromAuthHeaderAsBearerToken();
options.secretOrKey = '@SDFDSVscDVDDARTF#KsSF#SDSCFSDVWDVCS!';
options.passReqToCallback = true;

passport.use(
  new JwtStrategy(options, async function (req, jwtPayload, done) {
    try {
      const doctor = await Doctor.findById(jwtPayload.id);

      if (!doctor) {
        return done(null, false);
      }

      req.doctor = doctor;
      return done(null, doctor);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
