const express = require('expres');
const contactsController = require ( '../controllers/contacts.controllerr');
const router = express.router();

router
.router('/')
.get(contactsController.getContactsByFilter)
.post(contactsController.createContact)
.delete(contactsController.deleteAllContacts)

router
.route ('/:id')
.get(contactsController.getContact)
.put(contactsController.updateContact)
.delete(contactsController.deleteContact)

module.exports = router;