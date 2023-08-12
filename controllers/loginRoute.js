const express = require('express');
const router = express.Router();
const passport = require('passport')


// login route
router.get('/login', (req, res)=>{
    res.render('login.pug')
})


router.post('/login', passport.authenticate('local', 
{failureRedirect: '/api/login'}),
(req, res)=>{
    req.session.user = req.user
    let loggedinUser = req.session.user.fullname;
    console.log(loggedinUser)
    console.log(req.body)
    console.log(req.session.user.role)
    if (req.session.user.role === 'Director'){
        res.redirect('/api/directordash')
    }
    else if (req.session.user.role === 'Manager'){
        res.redirect('/api/managerdash')
    }
    else if (req.session.user.role === 'Agent'){
        res.redirect('/api/salesdash')
    }else{
        res.send('user doesnt exist')
    }
});


router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.render('login.pug')
    })
    console.log('you have been logged out')
})









    module.exports = router;