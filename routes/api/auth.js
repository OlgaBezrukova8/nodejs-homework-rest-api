const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");
const { authenticate, upload } = require("../../middlewares");

router.post("/signup", ctrlWrapper(ctrl.signUp));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));
router.post("/users/verify", ctrlWrapper(ctrl.resendEmail));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
