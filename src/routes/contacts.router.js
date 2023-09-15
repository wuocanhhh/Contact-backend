const express = require("express");
const contactsController = require("../controller/contacts.controller");
const { methodNotAllowed } = require("../controller/error.controller");

const router = express.Router();

router
  .route("/")
  .get(contactsController.getContactsByFilter)
  .post(contactsController.createContact)
  .delete(contactsController.deleteAllContact)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(contactsController.getContact)
  .post(contactsController.updateContact)
  .delete(contactsController.deleteContact)
  .all(methodNotAllowed);

module.exports = router;
