const express = require('express');
const path = require("path");
const dotenv = require("dotenv").config()
const connectDB = require("./config/dbconfig")
const port = process.env.PORT || 3000;
const app = express();


app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
// routes for styles files
app.use(express.static(path.join(__dirname, "public")))



// importing login routes
const loginRoute = require('./controllers/loginRoute')
const detailsRoute = require('./controllers/detailsRoutes')
const clinicRoute = require('./controllers/clinicRoute')
// const parkingRoute = require('./controllers/parkingRoute')
const homeRoute = require('./controllers/homeRoute')
const mainRoute = require('./controllers/mainRoute')
const signupRoute = require('./controllers/signupRoute')
const parkRoute = require('./controllers/parkRoute')




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








