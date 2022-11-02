const { RequestError } = require("../../helpers");

const getCurrent = async (req, res) => {
  if (!req.user) {
    throw RequestError(401, "Not authorized");
  }

  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
};

module.exports = getCurrent;
