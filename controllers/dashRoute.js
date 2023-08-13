const express = require('express');
const router = express.Router();
const {ensureLoggedIn} = require('connect-ensure-login');



router.get('/directordash', ensureLoggedIn('/api/login'), (req, res)=>{
    req.session.user = req.user;
    // let loggedInUser = req.session.user.fullname
    res.render('director_.pug')
})

router.get('/managerdash', ensureLoggedIn('/api/login'), (req, res)=>{
    req.session.user = req.user;
    // let loggedInUser = req.session.user.fullname
    res.render('manager_.pug')
})



router.get('/agentdash', ensureLoggedIn('/api/login'), (req, res)=>{
    res.render('newhome.pug')
})





module.exports = router