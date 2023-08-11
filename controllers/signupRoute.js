const express = require('express');
const Register = require('../models/signupModel')
const router = express.Router()
const passport = require('passport')


// login route
router.get('/register', (req, res)=>{
    res.render('newSignup.pug')
})


//  creating an user/employee
router.post('/reguser', async(req, res)=>{
    try{
    const user = new Register(req.body);
    console.log(req.body);
    await Register.register(user, req.body.password);
    res.redirect('/api/register')
    }
    catch(error){
        res.status(400).send({message: 'failed to register user'})
        console.log(error)
    }
})


























module.exports = router;