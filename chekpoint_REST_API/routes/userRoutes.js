const express = require('express')
const router = express.Router()
 const User = require('../models/UserModel')


//add new user to the data base

router.post('/adduser',(req, res) => {
    User.create(req.body)
    .then((data)=>res.json(data))
    .catch(err => res.status(500).json({msg:`error:::::${err}`}))
})



//get all users from data base 

 router.get('/getalluser',(req,res)=>{
     User.find()
     .then((data)=>res.json(data))
     .catch(err=> res.status(500).json({msg:`error:::::::${err}`}))
 })

 //edit a user by id

 router.put('/update/:id',(req, res)=>{
     User.findByIdAndUpdate(req.params.id, req.body, {new: true})
     .then((data)=>res.json(data))
     .catch(err=> res.status(500).json({msg:`error:::::::${err}`}))
 })

 //delete a user by findByIdAndDelete

 router.delete('/delete/:id',(req,res)=>{
     User.findByIdAndDelete(req.params.id,{new:true})
     .then((data)=>res.json(data))
     .catch(err=> res.status(500).json({msg:`error:::::::${err}`}))
 })

 module.exports = router