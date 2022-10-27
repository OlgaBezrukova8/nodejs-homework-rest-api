const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const addContact = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Missing required name field");
  }

  const result = await contacts.addContact(req.body);
  if (!result) {
    throw RequestError(404, "Error occured");
  }

  res.status(201).json(result);
};

module.exports = addContact;
