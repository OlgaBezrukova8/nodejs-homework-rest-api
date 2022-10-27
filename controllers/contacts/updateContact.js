const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const updateContact = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Missing fields");
  }
  const { contactId } = req.params;
  const body = req.body;
  const result = await contacts.updateContact(contactId, body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Contact updated",
  });
};

module.exports = updateContact;
