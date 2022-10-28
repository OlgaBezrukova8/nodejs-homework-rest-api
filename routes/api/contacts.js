const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { isValidId } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));
router.post("/", ctrlWrapper(ctrl.addContact));
router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));
router.put("/:contactId", isValidId, ctrlWrapper(ctrl.updateContact));
router.patch(
  "/:contactId/favorite",
  isValidId,
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
