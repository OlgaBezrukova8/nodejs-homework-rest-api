const { Contact } = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/contacts");

const updateFavorite = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "missing field favorite");
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

module.exports = updateFavorite;
