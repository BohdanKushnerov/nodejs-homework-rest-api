const express = require("express");
const ctrl = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrl.register
);

router.post("/login", validateBody(userSchemas.loginSchema), ctrl.login);

module.exports = router;
