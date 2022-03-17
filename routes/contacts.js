const express = require("express");
const router = express.Router();
// const {contactValidator} = require("../validations/contact-validator");

const ContactController = require("../controllers/ContactController");

// Ajouter un contact
router.post("/contacts", ContactController.createContact);

// Récupérer les contacts
router.get("/contacts", ContactController.getAllContact);


// Récupérer un contact
router.get("/contacts/:id", ContactController.getOneContact);

// Mettre à jour un contact
router.put("/contacts/:id", ContactController.updateOneContact);

// Supprimer un contact
router.delete("/contacts/:id", ContactController.deleteOneContact);


// -- Exportation du router avec nos routes
module.exports = router;