const { Contact } = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/contacts");

const updateContact = async (req, res, next) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Missing fields");
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Contact updated",
  });
};

module.exports = updateContact;
