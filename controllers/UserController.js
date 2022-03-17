const User = require('../models/User');

exports.createUser = (req, res, next) => {
    //delete req.body._id;
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'User Created !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.status(200).json( user ))
        .catch(error => res.status(400).json({ error }));
};

exports.updateOneUser = (req, res, next) => {
    User.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({ message: 'User Updated !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOneUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: 'User Deleted !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getAllUser = (req, res, next) => {
    User.find()
    .then( users => res.status(200).json( users ))
    .catch( error => res.status(400).json({ error }))
}
