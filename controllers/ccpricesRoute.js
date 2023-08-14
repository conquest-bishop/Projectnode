const express = require('express');
const Cprice =  require('../models/ccpricesModel');
const router = express.Router();

// Prices form route 
router.get('/ccpricesform', (req, res) => {
    res.render('ccprices.pug')
});

//creating a Price
router.post('/regccprice', async (req, res) => {
    try{
        const cost = new Cprice(req.body);
        await cost.save();
        console.log(req.body)
        res.redirect('/api/ccpricesform');
    }
    catch(error){
        res.status(404).render('ccprices');
        console.log(error)}
});




// reading from table
router.get('/ccpricestable', async(req, res) =>{
    try{
        let count = await Cprice.countDocuments(); 
        let items = await Cprice.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in ccprices collection:', count);
        console.log(items)
        res.render('ccpricesTable.pug', {ccprices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


// reading from agent table
router.get('/agentccpricestable', async(req, res) =>{
    try{
        let count = await Cprice.countDocuments(); 
        let items = await Cprice.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in ccprices collection:', count);
        console.log(items)
        res.render('agentccpriceTable.pug', {ccprices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


// Delete (we are CREATING by deleting)
router.post('/ccprice/delete', async (req, res)=>{
    try{
        await Cprice.deleteOne({_id: req.body.id});
        res.redirect('back');
    }catch(error){
        res.status(400).send('unable to delete item from the database')
    }
});

    // Update/edit (we are READING and editing)
    router.get('/ccprices/edit/:id', async (req, res)=>{
        try{
            const vehicle = await Cprice.findOne({_id: req.params.id});
            res.render('editccprices.pug', {ccprice:vehicle});
        }catch(error){
            res.status(400).send('could not find ccprices in database');
            console.log(error)
        }
    });
    
    // update (we are CREATING what we updated in the data base )
    router.post('/ccprices/edit', async (req, res)=>{
        try{
            await Cprice.findOneAndUpdate({_id: req.query.id}, req.body);
            res.redirect('/api/ccpricestable');
        }catch(error){
            res.status(400).send('could not edit ccprices data');
            console.log(error)
        }
    });











module.exports = router 