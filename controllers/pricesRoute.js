const express = require('express');
const Price =  require('../models/pricesModel');
const router = express.Router();

// Prices form route 
router.get('/pricesform', (req, res) => {
    res.render('prices.pug')
});

//creating a Price
router.post('/regprice', async (req, res) => {
    try{
        const cost = new Price(req.body);
        await cost.save();
        console.log(req.body)
        res.redirect('/api/pricesform');
    }
    catch(error){
        res.status(404).render('prices');
        console.log(error)}
});




// reading from table
router.get('/pricestable', async(req, res) =>{
    try{
        let count = await Price.countDocuments(); 
        let items = await Price.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('pricesTable.pug', {prices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


// reading from agent table
router.get('/agentpricestable', async(req, res) =>{
    try{
        let count = await Price.countDocuments(); 
        let items = await Price.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('agentpriceTable.pug', {prices: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


// Delete (we are CREATING by deleting)
router.post('/price/delete', async (req, res)=>{
    try{
        await Price.deleteOne({_id: req.body.id});
        res.redirect('back');
    }catch(error){
        res.status(400).send('unable to delete item from the database')
    }
});

    // Update/edit (we are READING and editing)
    router.get('/prices/edit/:id', async (req, res)=>{
        try{
            const vehicle = await Price.findOne({_id: req.params.id});
            res.render('editprices.pug', {price:vehicle});
        }catch(error){
            res.status(400).send('could not find parking in database');
            console.log(error)
        }
    });
    
    // update (we are CREATING what we updated in the data base )
    router.post('/prices/edit', async (req, res)=>{
        try{
            await Price.findOneAndUpdate({_id: req.query.id}, req.body);
            res.redirect('/api/pricestable');
        }catch(error){
            res.status(400).send('could not edit parking data');
            console.log(error)
        }
    });











module.exports = router 