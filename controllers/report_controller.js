const Report = require('../models/report');

module.exports.reports = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).populate({
      path: 'createdBy',
      select: '-password -__v',
      options: {
        sort: { createdAt: -1 },
      },
    });

    return res
      .status(200)
      .json({ message: 'Fetched reports Successfully', data: reports });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
