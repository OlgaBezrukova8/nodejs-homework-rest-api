const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");

router.post("/signup", ctrlWrapper(ctrl.signUp));
router.post("/login", ctrlWrapper(ctrl.login));

module.exports = router;
