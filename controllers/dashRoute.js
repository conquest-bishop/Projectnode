const express = require('express');
const router = express.Router();
const Park =  require('../models/parkModel');
const Clinic =  require('../models/clinicModel');
const Cprice =  require('../models/ccpricesModel');
const Price =  require('../models/pricesModel');
const Register =  require('../models/signupModel');



const {ensureLoggedIn} = require('connect-ensure-login');



router.get('/directordash', ensureLoggedIn('/api/login'), async(req, res)=>{
    req.session.user = req.user;
    let count = await Park.countDocuments(); 
    console.log('Total documents in Park collection:', count);
    let count2 = await Clinic.countDocuments(); 
    console.log('Total documents in clinic collection:', count2);
    // let costs = await Park.find()
    let parkCost = await Park.aggregate([
        {'$group': {_id: '$all', totalPcost: {$sum: '$cost'}}}])
    console.log('Total documents in clinic collection:', parkCost);
    let clinicCost = await Clinic.aggregate([
        {'$group': {_id: '$all', totalCcost: {$sum: '$cost'}}}])
    console.log('Total documents in clinic collection:', clinicCost);


    // let loggedInUser = req.session.user.fullname
    res.render('director_.pug', {totalsum: parkCost[0].totalPcost, totalCsum: clinicCost[0].totalCcost, count, count2})
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


// reading from table
router.get('/emptable', async(req, res) =>{
    try{
        // Count the number of documents in the Park collection
        let count = await Register.countDocuments(); 
        let items = await Register.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Register collection:', count);
        console.log(items)
        res.render('empTable.pug', {emps: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get employees'});
          
    }
});

  // Delete (we are CREATING by deleting)
  router.post('/emp/delete', async (req, res)=>{
    try{
        await Register.deleteOne({_id: req.body.id});
        res.redirect('back');
    }catch(error){
        res.status(400).send('unable to delete item from the database')
    }
});

    // Update/edit (we are READING and editing)
router.get('/emp/edit/:id', async (req, res)=>{
    try{
        const user = await Register.findOne({_id: req.params.id});
        res.render('editnewSignup', {emp:user});
    }catch(error){
        res.status(400).send('could not find employee in database');
        console.log(error)
    }
});

// update (we are CREATING what we updated in the data base )
router.post('/emp/edit', async (req, res)=>{
    try{
        await Register.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect('/api/emptable');
    }catch(error){
        res.status(400).send('could not edit employee data');
        console.log(error)
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