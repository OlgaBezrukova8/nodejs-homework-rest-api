const { Contact } = require("../../models/contacts");

const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/contacts");

const addContact = async (req, res, next) => {
  const { error } = schemas.addSchema.validate(req.body);

  if (error) {
    throw RequestError(400, "Missing required name field");
  }

  const result = await Contact.create(req.body);
  if (!result) {
    throw RequestError(404, "Error occured");
  }

  res.status(201).json(result);
};

module.exports = addContact;
