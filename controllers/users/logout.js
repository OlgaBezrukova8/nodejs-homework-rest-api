const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const logout = async (req, res) => {
  if (!req.user) {
    throw RequestError(401, "Not authorized");
  }
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json("Logout success");
};

module.exports = logout;
