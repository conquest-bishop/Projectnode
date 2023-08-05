const express = require('express');
const router = express.Router()


// login route
router.get('/clinic', (req, res)=>{
    res.render('newcarclinic.pug')
})




    module.exports = router;