const express = require('express');
const router = express.Router()


// login route
router.get('/signup', (req, res)=>{
    res.render('newSignup.pug')
})



module.exports = router;