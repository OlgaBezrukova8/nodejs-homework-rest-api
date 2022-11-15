const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Verify of email",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank">To confirm your email, please follow the link</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
