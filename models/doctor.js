const mongoose = require('mongoose');
const bcrypt = require('../config/bcrypt');

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

doctorSchema.pre('save', async function (next) {
  try {
    const doctor = this;
    if (!doctor.isModified('password')) {
      return next();
    }

    const hashPassword = await bcrypt.hashPassword(this.password);
    if (!hashPassword) {
      return next('Failed to register!');
    }
    doctor.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

doctorSchema.methods.validPassword = async function (password) {
  console.log(password, this);
  return await bcrypt.comparePassword(password, this.password);
};

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
