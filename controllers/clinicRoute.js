const express = require('express');
const Clinic =  require('../models/clinicModel');
const router = express.Router();

// clinic form route 
router.get('/clinicform', (req, res) => {
    res.render('newcarclinic.pug')
});


//creating a clinic client
router.post('/regclinic', async (req, res) => {
    try{
        const car = new Clinic(req.body);
        await car.save();
        console.log(req.body)
        res.redirect('/api/clinicform');
    }
    catch(error){
        res.status(404).render('newcarclinic');
        console.log(error)}
});


// reading from table
router.get('/clinictable', async(req, res) =>{
    try{
        let count = await Clinic.countDocuments(); 
        let items = await Clinic.find();
        // aggregate makes a sum of the desired numbers in the list
        // let ages = await Employee.aggregate([
        //     {'$group': {_id: '$all', totalAge: {$sum: '$age'}}}
        // ])
        console.log('Total documents in Park collection:', count);
        console.log(items)
        res.render('clinictable.pug', {clients: items, count});
    }
    catch(error){
        console.log(error)
        return  res.status().send({message: 'sorry couldnt get clients'});
          
    }
});


    // Delete (we are CREATING by deleting)
    router.post('/clinic/delete', async (req, res)=>{
        try{
            await Clinic.deleteOne({_id: req.body.id});
            res.redirect('back');
        }catch(error){
            res.status(400).send('unable to delete item from the database')
        }
    });


        // Update/edit (we are READING and editing)
router.get('/clinic/edit/:id', async (req, res)=>{
    try{
        const vehicle = await Clinic.findOne({_id: req.params.id});
        res.render('editclinic', {client:vehicle});
    }catch(error){
        res.status(400).send('could not find client in database');
        console.log(error)
    }
});

// update (we are CREATING what we updated in the data base )
router.post('/clinic/edit', async (req, res)=>{
    try{
        await Clinic.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect('/api/clinictable');
    }catch(error){
        res.status(400).send('could not edit client data');
        console.log(error)
    }
});





module.exports = router 