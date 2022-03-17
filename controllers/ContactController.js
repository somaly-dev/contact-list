const Contact = require("../models/Contact");

exports.createContact = (req, res, next) => {
  //delete req.body._id;
  const contact = new Contact({
    ...req.body,
  });
  contact.save()
    .then(() => res.status(201).json({message: "Contact Created !"}))
    .catch((error) => res.status(400).json({error}));
};

exports.getOneContact = (req, res, next) => {
  Contact.findOne({_id: req.params.id})
    .then((Contact) => res.status(200).json(Contact))
    .catch((error) => res.status(400).json({error}));
};

exports.updateOneContact = (req, res, next) => {
  Contact.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: "Contact Updated !"}))
    .catch((error) => res.status(400).json({error}));
};

exports.deleteOneContact = (req, res, next) => {
  Contact.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: "Contact Deleted !"}))
    .catch((error) => res.status(400).json({error}));
};

exports.getAllContact = (req, res, next) => {
  Contact.find()
    .then(Contacts => res.status(200).json(Contacts))
    .catch((error) => res.status(400).json({error}));
};