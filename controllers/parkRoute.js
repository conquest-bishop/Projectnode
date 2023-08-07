const express = require('express');
const Park =  require('../models/parkModel');
const router = express.Router();

// parking form route 
router.get('/parkform', (req, res) => {
    res.render('newparking.pug')
})

//creating a parking
router.post('/regpark', async (req, res) => {
    try{
        const car = new Park(req.body);
        await car.save();
        console.log(req.body)
        res.redirect('/api/parkform');
    }
    catch(error){
        res.status(404).render('parking');
        console.log(error)}
});

    // reading from table
    router.get('/parktable', async(req, res) =>{
        try{
            let items = await Park.find();
            // aggregate makes a sum of the desired numbers in the list
            // let ages = await Employee.aggregate([
            //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
            // ])
            console.log(items)
            res.render('parkingtable.pug', {parkings: items});
        }
        catch(error){
            console.log(error)
            return  res.status().send({message: 'sorry couldnt get clients'});
              
        }
    });

    // Delete (we are CREATING by deleting)
router.post('/parking/delete', async (req, res)=>{
    try{
        await Park.deleteOne({_id: req.body.id});
        res.redirect('back');
    }catch(error){
        res.status(400).send('unable to delete item from the database')
    }
});

    // Update/edit (we are READING and editing)
router.get('/parking/edit/:id', async (req, res)=>{
    try{
        const vehicle = await Park.findOne({_id: req.params.id});
        res.render('editpark', {parking:vehicle});
    }catch(error){
        res.status(400).send('could not find parking in database');
        console.log(error)
    }
});

// update (we are CREATING what we updated in the data base )
router.post('/parking/edit', async (req, res)=>{
    try{
        await Park.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect('/api/parktable');
    }catch(error){
        res.status(400).send('could not edit parking data');
        console.log(error)
    }
});











module.exports = router 