const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Représentation du schéma d'un contact
 */
const ContactSchema = Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  userId: String,
  createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model("Contact", ContactSchema);