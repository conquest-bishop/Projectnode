const express = require('express');
const router = express.Router();

// sign up details route
router.get('/details', (req, res)=>{
    res.render('sign-up-details.pug')
})





module.exports = router 