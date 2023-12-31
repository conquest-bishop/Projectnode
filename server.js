const express = require('express');
const path = require("path");
const dotenv = require("dotenv").config()
// importing passport
const passport = require('passport')
// importing database setup 
const connectDB = require("./config/dbconfig")
const port = process.env.PORT || 3000;
const app = express();
// importing register model 
const Register = require('./models/signupModel')

// importing session
const expressSession = require('express-session')({
    secret: "secret",
    resave: false,
    saveUninitialized: false
})

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
// routes for styles files
app.use(express.static(path.join(__dirname, "public")))

app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());



// importing login routes
const loginRoute = require('./controllers/loginRoute')
const detailsRoute = require('./controllers/detailsRoutes')
const clinicRoute = require('./controllers/clinicRoute')
// const parkingRoute = require('./controllers/parkingRoute')
const homeRoute = require('./controllers/homeRoute')
const mainRoute = require('./controllers/mainRoute')
const signupRoute = require('./controllers/signupRoute')
const parkRoute = require('./controllers/parkRoute')
const dashRoute = require('./controllers/dashRoute');
const mngparkRoute = require('./controllers/mngparkRoute');
const mngclinicRoute = require('./controllers/mngclinicRoute');
const pricesRoute = require('./controllers/pricesRoute');
const ccpricesRoute = require('./controllers/ccpricesRoute');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// calling the db from line 4
connectDB()

// api for routes 
app.use('/api', loginRoute)
app.use('/api', detailsRoute)
app.use('/api', clinicRoute)
// app.use('/api', parkingRoute)
app.use('/api', mainRoute)
app.use('/api', homeRoute)
app.use('/api', signupRoute)
app.use('/api', parkRoute)
app.use('/api', dashRoute)
app.use('/api', mngparkRoute)
app.use('/api', mngclinicRoute)
app.use('/api', pricesRoute)
app.use('/api', ccpricesRoute)

// routes 
// app.get('/login', (req, res) => {
//     res.render('login.pug');
// })

// app.get('/details', (req, res) => {
//     res.render('sign-up-details.pug');
// })

// app.get('/clinic', (req, res) => {
//     res.render('newcarclinic.pug');
// })

// app.get('/park', (req, res) => {
//     res.render('newparking.pug');
// })















app.listen(port, ()=>console.log(`server running at https://localhost:${port}`));








