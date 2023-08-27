const express = require('express');
const router = express.Router();
const Park =  require('../models/parkModel');
const Clinic =  require('../models/clinicModel');
const Cprice =  require('../models/ccpricesModel');
const Price =  require('../models/pricesModel');




const {ensureLoggedIn} = require('connect-ensure-login');



router.get('/directordash', ensureLoggedIn('/api/login'), async(req, res)=>{
    req.session.user = req.user;
    let count = await Park.countDocuments(); 
    console.log('Total documents in Park collection:', count);
    let count2 = await Clinic.countDocuments(); 
    console.log('Total documents in clinic collection:', count2);
    let parkCost = await Park.aggregate([
        {'$group': {_id: 'null', totalPcost: {$sum: '$cost'}}}])
    console.log('Total documents in clinic collection:', parkCost);


    // let loggedInUser = req.session.user.fullname
    res.render('director_.pug', {totalPcost: parkCost, count, count2})
});

// reading from table
router.get('/dirparktable', async(req, res) =>{
    try{
        // Count the number of documents in the Park collection
        let count = await Park.countDocuments(); 
        let items = await Park.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('dirparkTable.pug', {parkings: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});

// reading from table
router.get('/dirclinictable', async(req, res) =>{
    try{
        let count = await Clinic.countDocuments(); 
        let items = await Clinic.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('dirclinicTable.pug', {clients: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


// reading from table
router.get('/dirccpricetable', async(req, res) =>{
    try{
        let count = await Cprice.countDocuments(); 
        let items = await Cprice.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in ccprices collection:', count);
        console.log(items)
        res.render('dirccpricetable.pug', {ccprices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});

// reading from table
router.get('/dirparkprice', async(req, res) =>{
    try{
        let count = await Price.countDocuments(); 
        let items = await Price.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('dirparkpriceTable.pug', {prices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});






router.get('/managerdash', ensureLoggedIn('/api/login'), (req, res)=>{
    req.session.user = req.user;
    // let loggedInUser = req.session.user.fullname
    res.render('manager_.pug')
})



router.get('/agentdash', ensureLoggedIn('/api/login'), (req, res)=>{
    res.render('newhome.pug')
})





module.exports = router