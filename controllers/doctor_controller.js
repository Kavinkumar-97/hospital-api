const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
  try {
    const { name, password, confirmPassword, mobile } = req.body;

    if (password !== confirmPassword) {
      return res
        .status()
        .json({ message: 'Password and confirm password are not the same' });
    }

    let doctor = await Doctor.findOne({ mobile: mobile });

    if (doctor) {
      return res
        .status(409)
        .json({ message: 'Mobile number is already registered' });
    }

    doctor = await Doctor.create({ name, mobile, password });

    res.status(201).json({ message: 'Registered Successfully', data: doctor });
  } catch (error) {
    console.error(error);
    res.status(400).json('Failed to register!');
  }
};

module.exports.login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const doctor = await Doctor.findOne({ mobile });

    if (!doctor) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!(await doctor.validPassword(password, doctor.password))) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: doctor.id },
      '@SDFDSVscDVDDARTF#KsSF#SDSCFSDVWDVCS!'
    );

    return res.status(200).json({ message: 'Signed in Successfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
