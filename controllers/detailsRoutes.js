const express = require('express');
const Client =  require('../models/detailsModel');
const router = express.Router();

// sign up details route
router.get('/details', (req, res)=>{
    res.render('sign-up-details.pug')
})

//  creating an Client
router.post('/regClient', async(req, res)=>{
    try{
        const person = new Client(req.body);
        await person.save();
        console.log(req.body);
        res.redirect('/api/details');
        
    }
    catch(error){
        res.status(400).render('client');
        console.log(error)
    }});


    // reading from list
router.get('/table', async(req, res) =>{
    try{
        let items = await Client.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log(items)
        res.render('table.pug', {clients: items});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});

// Delete (we are CREATING by deleting)
router.post('/client/delete', async (req, res)=>{
    try{
        await Client.deleteOne({_id: req.body.id});
        res.redirect('back');
    }catch(error){
        res.status(400).send('unable to delete item from the database')
    }
});

// Update/edit (we are READING and editing)
router.get('/client/edit/:id', async (req, res)=>{
    try{
        const customer = await Client.findOne({_id: req.params.id});
        res.render('editclient', {client:customer});
    }catch(error){
        res.status(400).send('could not find client in database');
        console.log(error)
    }
});

// update (we are CREATING what we updated in the data base )
router.post('/client/edit', async (req, res)=>{
    try{
        await Client.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect('/api/table');
    }catch(error){
        res.status(400).send('could not edit client data');
        console.log(error)
    }
})






module.exports = router 