const express = require('express');
const router = express.Router()


// home page route
router.get('/home', (req, res)=>{
    res.render('newhome.pug')
})




    module.exports = router;