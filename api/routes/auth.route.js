const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js')

router.post('/signup',async (req,res)=>{
    // console.log(req.body);
    const {username,email,password} = req.body;
    const newUser = new User({username,email,password})
    await newUser.save();
    res.status(201).json('User Created Successfully')
})

module.exports=router;