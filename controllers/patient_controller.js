const Patient = require('../models/patient');
const Report = require('../models/report');

module.exports.register = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    let patient = await Patient.findOne({ mobile });

    if (patient) {
      return res
        .status(200)
        .json({ message: 'Patient details already exists', data: patient });
    }

    patient = await Patient.create({ name, mobile });

    if (!patient) {
      return res.status(400).json({ message: 'Failed to create patient' });
    }

    return res
      .status(201)
      .json({ message: 'Patient created successfully', data: patient });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports.createReport = async (req, res) => {
  try {
    const { status } = req.body;
    const createdBy = req.doctor._id;

    const patient = await Patient.findById(req.params.id);
    const newReport = await Report.create({ createdBy, status });

    if (!patient) {
      return res.status(400).json({ message: 'Patient not found' });
    }

    if (!newReport) {
      return res
        .status(400)
        .json({ message: 'Failed to create report for the patient' });
    }

    patient.reports.push(newReport);
    await patient.save();

    return res
      .status(201)
      .json({ message: 'Successfully created report', data: newReport });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports.allReport = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate({
      path: 'reports',
      options: {
        sort: { createdAt: -1 },
      },
    });

    if (!patient) {
      return res.status(400).json({ message: 'Patient not found' });
    }

    return res
      .status(200)
      .json({ message: 'Fetched reports Successfully', data: patient.reports });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
