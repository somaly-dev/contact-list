const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const port = process.env.PORT || 3000;


const mongoDB = process.env.MONGOOSE_URI;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée'));



module.exports = app;