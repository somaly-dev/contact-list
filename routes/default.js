const express = require('express');

const router = express.Router();

// GET homepage.
router.get('/', function(req, res, next) {
    res.render('layouts/layout');
  });


// Get Register Page

router.get('/register', function(req, res, next) {
  res.render('register');
});


module.exports = router;