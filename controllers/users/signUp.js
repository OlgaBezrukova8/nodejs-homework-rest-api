const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/user");

const signUp = async (req, res, next) => {
  const { error } = schemas.signUpSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Error validation");
  }

  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
  });

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signUp;
