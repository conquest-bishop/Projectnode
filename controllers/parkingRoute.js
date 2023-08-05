const express = require('express');
const router = express.Router()


// login route
router.get('/park', (req, res)=>{
    res.render('newparking.pug')
})




    module.exports = router;