const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/register', UserController.createUser);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateOneUser);
router.delete('/user/:id', UserController.deleteOneUser);
router.get('/user', UserController.getAllUser);


module.exports = router;