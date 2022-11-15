const { User } = require("../../models/user");
const { RequestError, sendEmail, createVerifyEmail } = require("../../helpers");
const { schemas } = require("../../models/user");

const resendEmail = async (req, res) => {
  const { error } = schemas.verifyEmailSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Error validation");
  }

  const { email } = req.body;

  if (!email) {
    throw RequestError(400, "Missing required field email");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(404, "Not found");
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
