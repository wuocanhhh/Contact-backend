const express = require('expres');
const {methodNotAllowed } = require ( '../controllers/contacts.controllerr');
const router = express.router();

router
.router('/')
.get(contactsController.getContactsByFilter)
.post(contactsController.createContact)
.delete(contactsController.deleteAllContacts)
.all(methodNotAllowed);

router
.route ('/:id')
.get(contactsController.getContact)
.put(contactsController.updateContact)
.delete(contactsController.deleteContact)
.all(methodNotAllowed);

module.exports = router;