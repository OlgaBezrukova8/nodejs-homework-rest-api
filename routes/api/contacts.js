const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { isValidId, authenticate } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));
router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getContactById)
);
router.post("/", authenticate, ctrlWrapper(ctrl.addContact));
router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeContact)
);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
