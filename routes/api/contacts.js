const express = require("express");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");

const { contactsSchemas } = require("../../models");

const ctrl = require("../../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(contactsSchemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsSchemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
