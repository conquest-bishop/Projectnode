const express = require('express');
const router = express.Router();
const Park =  require('../models/parkModel');
const Clinic =  require('../models/clinicModel');


const {ensureLoggedIn} = require('connect-ensure-login');



router.get('/directordash', ensureLoggedIn('/api/login'), async(req, res)=>{
    req.session.user = req.user;
    let count = await Park.countDocuments(); 
    console.log('Total documents in Park collection:', count);
    let count2 = await Clinic.countDocuments(); 
    console.log('Total documents in clinic collection:', count2);



    // let loggedInUser = req.session.user.fullname
    res.render('director_.pug', {count, count2})
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