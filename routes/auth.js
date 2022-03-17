const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/AuthController');
const User = require('../models/User');

// GET homepage.
router.get('/', function(req, res, next) {
    res.render('layouts/layout');
  });


// Get Register Page
router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
  const user = new User({
    ...req.body
});
user.save()
    .then(() => res.status(201).json({ message: 'User Created !' }))
    .catch(error => res.status(400).json({ error }));
  
});

router.get('/login', authController.login_get);
router.get('/logout', authController.logout);
router.post('/login',
    passport.authenticate('local', { failureRedirect: '/auth/login' }),
    authController.login_post);


module.exports = router;