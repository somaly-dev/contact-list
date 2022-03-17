const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var path = require('path');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

var homeRouter = require('./routes/default');

const app = express();


// Récupérer les routes
const userRoutes = require('./routes/User')
const contactRoute = require("./routes/contacts")

const dotenv = require('dotenv');
dotenv.config({path: '.env'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

// Connexion mongoose
const mongoDB = process.env.MONGOOSE_URI;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée'));

app.use('/', homeRouter);

app.use(userRoutes);
app.use(contactRoute);

module.exports = app;