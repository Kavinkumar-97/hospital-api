const bcrypt = require('bcrypt');
const saltRound = 10;

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    return null;
  }
};

module.exports.comparePassword = async (password, hashPassword) => {
  try {
    return await bcrypt.compare(password, hashPassword);
  } catch (error) {
    return null;
  }
};
