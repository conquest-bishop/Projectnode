const express = require('express');
const Park =  require('../models/parkModel');
const router = express.Router();

// parking form route 
router.get('/mngparkform', (req, res) => {
    res.render('mngpark.pug')
})

//creating a parking
router.post('/regpark', async (req, res) => {
    try{
        const car = new Park(req.body);
        await car.save();
        console.log(req.body)
        res.redirect('/api/mngparkform');
    }
    catch(error){
        res.status(404).render('mngpark');
        console.log(error)}
});

    // reading from table
    router.get('/mngparktable', async(req, res) =>{
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
            res.render('mngparkTable.pug', {parkings: items, count});
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
router.get('/mngparking/edit/:id', async (req, res)=>{
    try{
        const vehicle = await Park.findOne({_id: req.params.id});
        res.render('mngeditpark', {parking:vehicle});
    }catch(error){
        res.status(400).send('could not find parking in database');
        console.log(error)
    }
});

// update (we are CREATING what we updated in the data base )
router.post('/mngparking/edit', async (req, res)=>{
    try{
        await Park.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect('/api/mngparktable');
    }catch(error){
        res.status(400).send('could not edit parking data');
        console.log(error)
    }
});











module.exports = router 