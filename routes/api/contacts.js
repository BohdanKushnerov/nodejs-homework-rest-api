const express = require("express");

const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contactsSchemas } = require("../../models");

const ctrl = require("../../controllers");

// router.get("/", ctrl.getAll);
router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(contactsSchemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactsSchemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactsSchemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
