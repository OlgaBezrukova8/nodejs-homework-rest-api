const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");
const { authenticate } = require("../../middlewares");

router.post("/signup", ctrlWrapper(ctrl.signUp));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
